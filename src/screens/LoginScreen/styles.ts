import styled from "styled-components";

import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black};
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.white};
  margin-bottom: 20px;
`;
