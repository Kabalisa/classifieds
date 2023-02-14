import { FontAwesome } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CreateProductScreen from "../screens/CreateProductScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList, RootStackScreenProps } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import theme from "../theme";

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
          title: "Classifieds",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerRight: () => (
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
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="productDetails" component={ProductDetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
