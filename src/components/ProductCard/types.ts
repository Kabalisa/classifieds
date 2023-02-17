import { Product } from "../../store/slice";

export type ProductCardProps = {
  product: Product;
  mt?: number;
  [key: string]: any;
};
