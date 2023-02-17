import styled from "styled-components";

import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  padding: 15px 0px;
  background-color: ${theme.colors.black};
`;

export const Wrapper = styled.View`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.white};
  margin-bottom: 20px;
`;
