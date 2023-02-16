import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { RootStackScreenProps } from "../../../types";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

import { Container, Title } from "./styles";
import { ErrorText } from "../../components/Input/style";
import { BUTTON_TYPE } from "../../components/Button/types";
import { INPUT_TYPE } from "../../components/Input/types";
import { loginValidationSchema } from "./helper";
import theme from "../../theme";

import { setLoading, setSeller } from "../../store/slice";
import {
  loginSeller,
  setToken,
  getToken,
  removeToken,
  currentUser,
} from "../../apis/auth";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (phoneNumber: string, password: string) => {
    try {
      dispatch(setLoading(true));
      setError("");
      const result = await loginSeller(phoneNumber, password);
      dispatch(setSeller(result.data.seller));
      await setToken(result.data.jwt);
      dispatch(setLoading(false));
      navigation.navigate("Home");
    } catch (error: any) {
      dispatch(setLoading(false));
      if (error.response && error.response.data && error.response.data.errors) {
        setError(error.response.data.errors[0].message);
      } else {
        setError("something went wrong! try again");
      }
    }
  };

  const handleToken = async () => {
    const token = await getToken();
    if (token) {
      try {
        dispatch(setLoading(true));
        const result = await currentUser(token);
        const { data } = result;
        dispatch(
          setSeller({
            id: data.currentUser.id,
            name: data.currentUser.name,
            phoneNumber: data.currentUser.phoneNumber,
          })
        );
        dispatch(setLoading(false));
        navigation.navigate("Home");
      } catch (error) {
        dispatch(setLoading(false));
        await removeToken();
      }
    }
  };

  useEffect(() => {
    handleToken();
  }, []);

  return (
    <Container>
      <Title>Login as a Seller</Title>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ phoneNumber: "", password: "" }}
        onSubmit={(values) => {
          const { phoneNumber, password } = values;
          handleLogin(phoneNumber, password);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <Input
              name="phoneNumber"
              label="Phone number"
              mb={20}
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              error={
                touched.phoneNumber && errors.phoneNumber
                  ? errors.phoneNumber
                  : undefined
              }
            />
            <Input
              name="password"
              label="Password"
              type={INPUT_TYPE.PASSWORD}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Button name="Log in" onPress={handleSubmit} disabled={!isValid} />
          </>
        )}
      </Formik>
      <Button
        name="Sign up"
        buttonType={BUTTON_TYPE.LIGHT}
        mt={25}
        onPress={() => {
          navigation.navigate("Singup");
        }}
      />
      <Button
        name="Continue as a Customer"
        buttonType={BUTTON_TYPE.OUTLINED}
        mt={50}
        showIcon={true}
        icon={
          <Icon
            name="arrow-circle-right"
            size={20}
            color={theme.colors.primary}
          />
        }
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </Container>
  );
}
