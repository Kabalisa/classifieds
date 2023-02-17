import { AuthServer } from "./axios";

export const getProducts = async () => {
  return await AuthServer.get("/products");
};
