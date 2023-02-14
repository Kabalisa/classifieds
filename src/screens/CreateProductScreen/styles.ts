import styled from "styled-components";

import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
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
