import { StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Text, View } from "../../components/Themed";
import { Container, Title } from "./styles";

export default function CreateProductScreen() {
  return (
    <ScrollView>
      <Container>
        <Title size={15} mb={15}>
          Provide the information below:
        </Title>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
