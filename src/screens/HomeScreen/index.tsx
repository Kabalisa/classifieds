import { StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { ProductCard } from "../../components/ProductCard";
import { RootStackScreenProps } from "../../../types";
import { Container } from "./styles";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const app = useSelector((state: RootState) => state.app);
  console.log("\n\n ==>>apppp", app);

  return (
    <ScrollView>
      <Container>
        <ProductCard />
        <ProductCard mt={20} />
        <ProductCard mt={20} />
        <ProductCard mt={20} />
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
