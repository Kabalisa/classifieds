import styled from "styled-components";
import { TouchableOpacity, ImageBackground } from "react-native";

import theme from "../../theme";

export const Wrapper = styled.View<{
  height?: number;
  width?: number;
}>`
  width: ${(props: any) => props.width || 400}px;
  height: ${(props: any) => props.height || 500}px;
  background-color: transparent;
  flex: 1;
  position: absolute;
`;

export const Image = styled(ImageBackground)`
  flex: 1;
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

export const Actions = styled.View<{
  height?: number;
  width?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}>`
  margin-bottom: ${(props: any) => props.mb || 0}px;
  margin-top: ${(props: any) => props.mt || 0}px;
  margin-left: ${(props: any) => props.ml || 0}px;
  margin-right: ${(props: any) => props.mr || 0}px;
  width: 100%;
  background-color: ${theme.colors.black};
  padding: 15px 25px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
