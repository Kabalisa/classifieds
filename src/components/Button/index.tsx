import React from "react";

import { ButtonWrapper, ButtonLabel } from "./style";
import { Icon } from "../Icon";
import { ButtonProps, BUTTON_TYPE } from "./types";
import theme from "../../theme";

export const Button: React.FC<ButtonProps> = ({
  name,
  disabled = false,
  type = "submit",
  mb = 15,
  mt = 15,
  buttonType = BUTTON_TYPE.DEFAULT,
  showIcon = false,
  ...rest
}) => {
  return (
    <ButtonWrapper
      mb={mb}
      mt={mt}
      disabled={disabled}
      buttonType={buttonType}
      {...rest}
    >
      <ButtonLabel>{name}</ButtonLabel>
      {showIcon ? (
        <Icon
          name="arrow-circle-right"
          size={20}
          color={theme.colors.primary}
        />
      ) : null}
    </ButtonWrapper>
  );
};
