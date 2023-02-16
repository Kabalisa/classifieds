import Styled from "styled-components";

import theme from "../../theme";

export const Container = Styled.View`
flex: 1;
background-color: ${theme.colors.black};
padding: 0px 15px;
`;

export const LoaderWrapper = Styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0005;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
