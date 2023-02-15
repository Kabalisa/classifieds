import { StyleSheet } from "react-native";

import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { BUTTON_TYPE } from "../../components/Button/types";

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
  return (
    <Container>
      <ProductImage source={image} resizeMode="cover" />
      <TextContainer>
        <Text mt={12} size={16} mr={12} color={theme.colors.primary}>
          Name:
        </Text>
        <Text mt={12} size={16}>
          Camera
        </Text>
      </TextContainer>
      <TextContainer>
        <Text mt={15} size={16} mr={12} color={theme.colors.primary}>
          Price:
        </Text>
        <Text mt={15} size={16}>
          150000 RWF
        </Text>
      </TextContainer>
      <TextContainer>
        <Text mt={15} size={16} mr={12} color={theme.colors.primary}>
          Category:
        </Text>
        <Text mt={15} size={16}>
          Technology
        </Text>
      </TextContainer>
      <TextContainer direction="column">
        <Text mt={15} size={16} mr={12} color={theme.colors.primary}>
          Desrcription
        </Text>
        <Text mt={7} size={14} weight={400}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsumlorem ipsum
        </Text>
      </TextContainer>
      <ButtonsContainer>
        <Button
          name="Share on Facebook"
          buttonType={BUTTON_TYPE.OUTLINED}
          mt={20}
          showIcon={true}
          icon={
            <Icon
              name="facebook-square"
              size={20}
              color={theme.colors.blue}
            />
          }
        />
        <Button
          name="Share on Whatsapp"
          buttonType={BUTTON_TYPE.OUTLINED}
          mt={5}
          showIcon={true}
          icon={<Icon name="whatsapp" size={20} color={theme.colors.darkGreen} />}
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
          15 Feb 23
        </Text>
      </TextContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
