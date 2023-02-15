import styled from "styled-components";
import { TextInput, TouchableOpacity } from "react-native";

import theme from "../../theme";

export const Wrapper = styled(TouchableOpacity)<{
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}>`
  margin-bottom: ${(props: any) => props.mb || 0}px;
  margin-top: ${(props: any) => props.mt || 0}px;
  margin-left: ${(props: any) => props.ml || 0}px;
  margin-right: ${(props: any) => props.mr || 0}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 8px;
`;

export const Label = styled.Text<{
  mt?: number;
  mb?: number;
  color?: string;
  weight?: number;
  size?: number;
}>`
  margin-bottom: ${(props: any) => props.mb || 0}px;
  margin-top: ${(props: any) => props.mt || 0}px;
  font-size: ${(props: any) => props.size || 13}px;
  color: ${(props: any) => props.color || theme.colors.white};
  font-style: normal;
  font-weight: ${(props: any) => props.weight || 700};
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 5px;
`;
