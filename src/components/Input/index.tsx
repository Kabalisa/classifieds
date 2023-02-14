import React from "react";

import { Wrapper, Label, InputField, ErrorText } from "./style";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  mb = 15,
}) => {
  return (
    <Wrapper mb={mb}>
      <Label>{name}</Label>
      <InputField placeholder={name} />
    </Wrapper>
  );
};
