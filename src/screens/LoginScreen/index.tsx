import { Formik } from "formik";

import { RootStackScreenProps } from "../../../types";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Title } from "./styles";
import { BUTTON_TYPE } from "../../components/Button/types";
import { INPUT_TYPE } from "../../components/Input/types";
import { loginValidationSchema } from "./helper";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  return (
    <Container>
      <Title>Login as a Seller</Title>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ phoneNumber: "", password: "" }}
        onSubmit={(values) => console.log("\n\n values", values, "\n\n")}
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
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </Container>
  );
}
