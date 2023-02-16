import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { RootStackScreenProps } from "../../../types";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Title } from "../LoginScreen/styles";
import { ErrorText } from "../../components/Input/style";
import { BUTTON_TYPE } from "../../components/Button/types";
import { INPUT_TYPE } from "../../components/Input/types";

import { signupValidationSchema } from "./helper";

import { setLoading, setSeller } from "../../store/slice";
import { signupSeller, setToken } from "../../apis/auth";

export default function SingupScreen({
  navigation,
}: RootStackScreenProps<"Singup">) {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async (
    name: string,
    phoneNumber: string,
    password: string
  ) => {
    try {
      dispatch(setLoading(true));
      setError("");
      const result = await signupSeller(name, phoneNumber, password);
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

  return (
    <Container>
      <Title>Signup as a Seller</Title>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{
          name: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          const { name, phoneNumber, password } = values;
          handleSignup(name, phoneNumber, password);
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
              name="name"
              label="Name"
              mb={20}
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={touched.name && errors.name ? errors.name : undefined}
            />
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
              mb={20}
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
            <Input
              name="confirmPassword"
              label="Confirm Password"
              type={INPUT_TYPE.PASSWORD}
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              error={
                touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : undefined
              }
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Button name="Sign up" onPress={handleSubmit} disabled={!isValid} />
          </>
        )}
      </Formik>
      <Button
        name="Log in"
        buttonType={BUTTON_TYPE.LIGHT}
        mt={25}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Container>
  );
}
