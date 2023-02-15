import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({ size, color, name, ml }) => {
  return (
    <FontAwesome
      name={name}
      color={color}
      size={size}
      style={{ marginBottom: 5, marginLeft: ml || 14 }}
    />
  );
};
