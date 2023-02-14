import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Styled from "styled-components";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import theme from "./src/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Container>
          <Navigation colorScheme={colorScheme} />
        </Container>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const Container = Styled.View`
flex: 1;
background-color: ${theme.colors.black};
padding: 0px 15px;
`;
