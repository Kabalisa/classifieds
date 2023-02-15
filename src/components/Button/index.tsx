import React from "react";

import { ButtonWrapper, ButtonLabel } from "./style";
import { ButtonProps, BUTTON_TYPE } from "./types";

export const Button: React.FC<ButtonProps> = ({
  name,
  disabled = false,
  type = "submit",
  mb = 15,
  mt = 15,
  buttonType = BUTTON_TYPE.DEFAULT,
  showIcon = false,
  icon,
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
      {showIcon ? icon : null}
    </ButtonWrapper>
  );
};
