import { createSlice } from "@reduxjs/toolkit";

const keranjangSlice = createSlice({
  name: "keranjang",
  initialState: {
    data: [],
  },
  reducers: {
    tambahKeKeranjang: (state, action) => {
      const barangDiKeranjang = state.data.find(
        (barang) => barang.id === action.payload.id
      );
      if (barangDiKeranjang) {
        barangDiKeranjang.kuantiti++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { tambahKeKeranjang } = keranjangSlice.actions;
export default keranjangSlice.reducer;
