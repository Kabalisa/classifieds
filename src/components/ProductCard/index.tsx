import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Wrapper, Label, ProductImage } from "./style";
import { ProductCardProps } from "./types";

import theme from "../../theme";

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  mt,
  onPress,
}) => {
  const navigation = useNavigation();

  const { image, name, price, manufactureDate } = product;

  return (
    <View
      style={{
        shadowColor: theme.colors.primary1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 20,
        marginTop: mt || 0,
      }}
    >
      <Wrapper
        onPress={() => {
          onPress();
          navigation.navigate("productDetails");
        }}
      >
        <ProductImage source={{ uri: image }} resizeMode="cover" />
        <Label size={16} mt={7} mb={7}>
          {name}
        </Label>
        <Label size={14} mb={7} weight={600} color={theme.colors.primary}>
          {price} RWF
        </Label>
        <Label size={14} weight={300}>
          Manufacture date: {manufactureDate}
        </Label>
      </Wrapper>
    </View>
  );
};
