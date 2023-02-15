import React from "react";
import { View, useWindowDimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Icon } from "../Icon";

import { Wrapper, Label, Image, Actions } from "./style";
import { PhotoPreviewProps } from "./types";

import theme from "../../theme";

export const PhotoPreview: React.FC<PhotoPreviewProps> = ({
  photo,
  retake,
  setPhoto,
}) => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

  return (
    <Wrapper width={width} height={height - 120}>
      <Image source={{ uri: photo && photo.uri }} />
      <Actions>
        <TouchableOpacity onPress={() => retake()}>
          <Icon name="close" size={28} color={theme.colors.white} ml={1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPhoto()}>
          <Icon name="check" size={28} color={theme.colors.white} ml={1} />
        </TouchableOpacity>
      </Actions>
    </Wrapper>
  );
};
