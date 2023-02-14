import { RootStackScreenProps } from "../../../types";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Title } from "./styles";
import { BUTTON_TYPE } from "../../components/Button/types";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  return (
    <Container>
      <Title>Login as a Seller</Title>
      <Input name="Phonenumber" mb={20} />
      <Input name="Password" />
      <Button name="Login" />
      <Button
        name="Signup"
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
