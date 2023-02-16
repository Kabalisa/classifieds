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

interface Product {
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
}

const initialState: AppState = {
  user: null,
  products: [],
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSeller: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setSeller } = appSlice.actions;

export default appSlice.reducer;
