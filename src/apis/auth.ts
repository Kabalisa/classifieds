import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthServer } from "./axios";

export const loginSeller = async (phoneNumber: string, password: string) => {
  return await AuthServer.post("/users/signin", { phoneNumber, password });
};

export const currentUser = async (token: string) => {
  return await AuthServer.get("/users/currentuser", {
    headers: { token: token },
  });
};

export const signupSeller = async (
  name: string,
  phoneNumber: string,
  password: string
) => {
  return await AuthServer.post("/users/signup", {
    name,
    phoneNumber,
    password,
  });
};

export async function setToken(token: string) {
  try {
    return AsyncStorage.setItem("token", token);
  } catch (e) {
    console.log("setToken", e);
  }
}

export async function removeToken() {
  try {
    return AsyncStorage.removeItem("token");
  } catch (e) {
    console.log("removeToken", e);
  }
}

export async function getToken() {
  try {
    return AsyncStorage.getItem("token");
  } catch (e) {
    console.log("getToken", e);
  }
}
