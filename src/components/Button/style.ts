import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";

import theme from "../../theme";
import { BUTTON_TYPE } from "./types";

export const ButtonWrapper = styled(TouchableOpacity)<{
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  disabled?: boolean;
  buttonType?: BUTTON_TYPE;
}>`
  margin-bottom: ${(props: any) => props.mb || 0}px;
  margin-top: ${(props: any) => props.mt || 0}px;
  margin-left: ${(props: any) => props.ml || 0}px;
  margin-right: ${(props: any) => props.mr || 0}px;
  width: 100px;
  height: 40px;
  background-color: ${(props: any) =>
    props.disabled ? theme.colors.primary2 : theme.colors.primary};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props: any) =>
    props.buttonType === BUTTON_TYPE.LIGHT &&
    css`
      width: auto;
      height: auto;
      background-color: transparent;
      border: none;
    `};

  ${(props: any) =>
    props.buttonType === BUTTON_TYPE.OUTLINED &&
    css`
      width: 265px;
      background-color: transparent;
      border: 1px solid;
      border-color: ${theme.colors.primary3};
      display: flex;
      flex-direction: row;
    `};
`;

export const ButtonLabel = styled.Text`
  color: ${theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 6px;
`;
