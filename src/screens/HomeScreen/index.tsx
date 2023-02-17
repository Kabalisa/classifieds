import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store/store";
import { ProductCard } from "../../components/ProductCard";
import { RootStackScreenProps } from "../../../types";
import { Container, Wrapper, Text } from "./styles";

import { getProducts } from "../../apis/products";
import { setProducts, setLoading, setCurrentProduct } from "../../store/slice";
import theme from "../../theme";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const app = useSelector((state: RootState) => state.app);
  const { products, user } = app;
  const dispatch = useDispatch();

  const handleFetchProducts = async () => {
    try {
      dispatch(setLoading(true));
      const result = await getProducts();
      const { data } = result;
      dispatch(setProducts(data.products));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setProducts([]));
      dispatch(setLoading(false));
    }
  };

  const handleCurrentProduct = (id: string) => {
    dispatch(setCurrentProduct(id));
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();

      if (user == null) {
        console.log("bjbkvabjvas");
        navigation.dispatch(e.data.action);
      }
    });
  }, [navigation, user]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.black }}>
      <Container>
        {products.map((product, i) => (
          <ProductCard
            product={product}
            key={i}
            mt={i && 20}
            onPress={() => handleCurrentProduct(product.id)}
          />
        ))}
        {!products.length && (
          <Wrapper>
            <Text>No products available</Text>
          </Wrapper>
        )}
      </Container>
    </ScrollView>
  );
}
