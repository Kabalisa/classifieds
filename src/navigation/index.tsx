import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CreateProductScreen from "../screens/CreateProductScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList, RootStackScreenProps } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import theme from "../theme";
import { RootState } from "../store/store";
import { Text } from "../screens/ProductDetailsScreen/styles";
import { setLoading, setSeller } from "../store/slice";
import { removeToken } from "../apis/auth";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const app = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const { user } = app;

  const handleLogout = async (navigate: any) => {
    try {
      dispatch(setLoading(true));
      await removeToken();
      dispatch(setSeller(null));
      dispatch(setLoading(false));
      navigate();
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Singup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootStackScreenProps<"Home">) => ({
          title: "Home",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerLeft: () =>
            user === null ? null : (
              <Pressable
                onPress={() => handleLogout(navigation.navigate("Login"))}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  name="logout"
                  size={20}
                  style={{ marginRight: 5 }}
                  color={theme.colors.primary}
                />
                <Text>Log out</Text>
              </Pressable>
            ),
          headerRight: () =>
            user === null ? null : (
              <Pressable onPress={() => navigation.navigate("createProduct")}>
                <FontAwesome
                  name="plus"
                  size={25}
                  style={{ marginRight: 15 }}
                  color={theme.colors.primary}
                />
              </Pressable>
            ),
        })}
      />
      <Stack.Screen
        name="createProduct"
        component={CreateProductScreen}
        options={() => ({
          title: "Create Product",
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTintColor: theme.colors.white,
        })}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="productDetails"
          component={ProductDetailsScreen}
          options={() => ({
            title: "Product Details",
            headerStyle: {
              backgroundColor: theme.colors.black,
            },
            headerTintColor: theme.colors.white,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
