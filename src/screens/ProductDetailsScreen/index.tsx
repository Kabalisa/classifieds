import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { BUTTON_TYPE } from "../../components/Button/types";
import { Product } from "../../store/slice";

import theme from "../../theme";

const image = require("../../assets/images/product.jpeg");

import {
  Container,
  ProductImage,
  Text,
  TextContainer,
  ButtonsContainer,
} from "./styles";

export default function ProductDetailsScreen() {
  const [product, setProduct] = useState<Product | null>(null);
  const app = useSelector((state: RootState) => state.app);

  useEffect(() => {
    const currentProduct = app.products.find(
      (product) => product.id === app.currentProduct
    );

    currentProduct && setProduct(currentProduct);
  }, []);

  if (product === null) {
    return (
      <Container>
        <Text>No Product</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ProductImage source={{ uri: product.image }} resizeMode="cover" />
      <TextContainer>
        <Text mt={12} size={16} mr={12} color={theme.colors.primary}>
          Name:
        </Text>
        <Text mt={12} size={16}>
          {product.name}
        </Text>
      </TextContainer>
      <TextContainer>
        <Text mt={15} size={16} mr={12} color={theme.colors.primary}>
          Price:
        </Text>
        <Text mt={15} size={16}>
          {product.price} RWF
        </Text>
      </TextContainer>
      <TextContainer>
        <Text mt={15} size={16} mr={12} color={theme.colors.primary}>
          Category:
        </Text>
        <Text mt={15} size={16}>
          {product.category}
        </Text>
      </TextContainer>
      <TextContainer direction="column">
        <Text mt={15} size={16} mr={12} color={theme.colors.primary}>
          Desrcription
        </Text>
        <Text mt={7} size={14} weight={400}>
          {product.description}
        </Text>
      </TextContainer>
      <ButtonsContainer>
        <Button
          name="Share on Facebook"
          buttonType={BUTTON_TYPE.OUTLINED}
          mt={20}
          showIcon={true}
          icon={
            <Icon name="facebook-square" size={20} color={theme.colors.blue} />
          }
        />
        <Button
          name="Share on Whatsapp"
          buttonType={BUTTON_TYPE.OUTLINED}
          mt={5}
          showIcon={true}
          icon={
            <Icon name="whatsapp" size={20} color={theme.colors.darkGreen} />
          }
        />
      </ButtonsContainer>
      <TextContainer>
        <Text
          mt={10}
          size={14}
          mr={12}
          weight={500}
          color={theme.colors.primary}
        >
          Manufacture date
        </Text>
        <Text mt={10} size={14} weight={500}>
          {product.manufactureDate}
        </Text>
      </TextContainer>
    </Container>
  );
}
