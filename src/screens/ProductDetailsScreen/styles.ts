import styled from "styled-components";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native";

import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  padding: 15px 15px;
`;

export const TextContainer = styled.View<{
  direction: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${(props: any) => props.direction || "row"};
`;

export const ButtonsContainer = styled.View<{
  direction: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.Text<{
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  color?: string;
  weight?: number;
  size?: number;
}>`
  margin-bottom: ${(props: any) => props.mb || 0}px;
  margin-top: ${(props: any) => props.mt || 0}px;
  margin-left: ${(props: any) => props.ml || 0}px;
  margin-right: ${(props: any) => props.mr || 0}px;
  font-size: ${(props: any) => props.size || 13}px;
  color: ${(props: any) => props.color || theme.colors.white};
  font-style: normal;
  font-weight: ${(props: any) => props.weight || 700};
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 6px;
`;
