import styled from "styled-components";
import { TextInput } from "react-native";

import theme from "../../theme";

export const Wrapper = styled.View<{
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}>`
  margin-bottom: ${(props: any) => props.mb || 0}px;
  margin-top: ${(props: any) => props.mt || 0}px;
  margin-left: ${(props: any) => props.ml || 0}px;
  margin-right: ${(props: any) => props.mr || 0}px;
`;

export const Label = styled.Text`
  font-size: 13px;
  color: ${theme.colors.white};
  font-style: normal;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const ErrorText = styled.Text`
  color: ${(props: any) => (props.color ? props.color : theme.colors.red)};
  font-size: 13px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 5px;
`;

export const InputField = styled(TextInput)<{ height?: number }>`
  color: ${theme.colors.white};
  font-size: 13px;
  background-color: ${theme.colors.primary1};
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  width: 300px;
  height: ${(props: any) => props.height || 33}px;
  padding: 0px 8px;
`;
