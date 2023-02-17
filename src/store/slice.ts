import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Category {
  home = "home",
  clothing = "clothing",
  health = "health",
  electronics = "electronics",
  sports = "sports",
  agriculture = "agriculture",
  appliances = "appliances",
}
interface User {
  id: string;
  name: string;
  phoneNumber: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  manufactureDate: string;
  category: Category;
  userId: string;
}

export interface AppState {
  user: User | null;
  products: Product[];
  loading: Boolean;
  currentProduct: string | null;
}

const initialState: AppState = {
  user: null,
  products: [],
  loading: false,
  currentProduct: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSeller: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload];
    },
    setCurrentProduct: (state, action: PayloadAction<string>) => {
      state.currentProduct = action.payload;
    },
  },
});

export const {
  setLoading,
  setSeller,
  setProducts,
  setProduct,
  setCurrentProduct,
} = appSlice.actions;

export default appSlice.reducer;
