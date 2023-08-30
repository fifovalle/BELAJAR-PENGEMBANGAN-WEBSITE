import { configureStore } from "@reduxjs/toolkit";
import keranjangReducer from "./slices/keranjangSlice";

const store = configureStore({
  reducer: {
    keranjang: keranjangReducer,
  },
});
console.log("ONCREATE STORE : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});
export default store;
