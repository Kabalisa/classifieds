import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({ size, color, name }) => {
  return (
    <FontAwesome
      name={name}
      color={color}
      size={size}
      style={{ marginBottom: 5, marginLeft: 14 }}
    />
  );
};
