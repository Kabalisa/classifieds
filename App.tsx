import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Styled from "styled-components";
import { Provider } from "react-redux";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import AppContainer from "./src/components/Container";

import { store } from "./src/store/store";

import theme from "./src/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <AppContainer />
        </Provider>
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

const LoaderWrapper = Styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0005;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
