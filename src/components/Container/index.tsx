import React from "react";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

import useColorScheme from "../../hooks/useColorScheme";
import Navigation from "../../navigation";
import { RootState } from "../../store/store";

import { Container, LoaderWrapper } from "./style";

const AppContainer = () => {
  const loading = useSelector((state: RootState) => state.app.loading);
  const colorScheme = useColorScheme();

  return (
    <Container>
      <Navigation colorScheme={colorScheme} />
      {loading && (
        <LoaderWrapper>
          <ActivityIndicator size="large" />
        </LoaderWrapper>
      )}
    </Container>
  );
};

export default AppContainer;
