import { AuthServer } from "./axios";

export const getProducts = async () => {
  return await AuthServer.get("/products");
};

export const createProduct = async (
  name: string,
  price: string,
  description: string,
  image: string,
  manufactureDate: string,
  category: string,
  token: string
) => {
  return await AuthServer.post(
    "/products/create",
    {
      name,
      price,
      description,
      image,
      manufactureDate,
      category,
    },
    { headers: { token: token } }
  );
};
