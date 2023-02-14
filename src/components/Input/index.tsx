import React from "react";

import { Wrapper, Label, InputField, ErrorText } from "./style";
import { InputProps } from "./types";
import { INPUT_TYPE } from "./types";

export const Input: React.FC<InputProps> = ({
  name,
  label,
  error,
  type = INPUT_TYPE.TEXT,
  mb = 15,
  ...rest
}) => {
  return (
    <Wrapper mb={mb}>
      <Label>{label}</Label>
      <InputField
        placeholder={label}
        secureTextEntry={type === INPUT_TYPE.PASSWORD ? true : false}
        keyboardType={
          name === "phoneNumber" || name === "price" ? "numeric" : "text"
        }
        {...rest}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </Wrapper>
  );
};
