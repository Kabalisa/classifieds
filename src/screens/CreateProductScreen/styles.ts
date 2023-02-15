import styled from "styled-components";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native";

import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 15px 0px;
`;

export const Title = styled.Text<{
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

export const CameraReact = styled(Camera)<{ height: number; width: number }>`
  flex: 1;
  width: ${(props: any) => props.width || 400}px;
  height: ${(props: any) => props.height || 500}px;
  position: absolute;
`;

export const CameraButtonWrapper = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: center;
`;

export const CameraButton = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  bottom: 0;
  border-radius: 50px;
  background-color: #fff;
`;

export const ImageNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  border: 1px solid #805b25;
  padding: 8px;
  width: 300px;
  position: relative;
  margin-top: 5px;
`;

export const ImageName = styled.Text<{
  mt?: number;
  mb?: number;
  color?: string;
  weight?: number;
  size?: number;
}>`
  font-size: ${(props: any) => props.size || 13}px;
  color: ${(props: any) => props.color || theme.colors.white};
  font-style: normal;
  font-weight: ${(props: any) => props.weight || 700};
`;

export const CloseIcon = styled(TouchableOpacity)`
  position: absolute;
  right: -15;
  top: -18;
  margin-bottom: 0px;
`;
