import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";

export type IconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size: number;
};
