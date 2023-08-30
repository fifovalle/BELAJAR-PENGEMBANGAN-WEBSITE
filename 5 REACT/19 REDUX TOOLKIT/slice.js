import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const keranjangSlice = createSlice({
  name: "keranjang",
  initialState: [],
  reducers: {
    tambahKeKeranjang(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    keranjang: keranjangSlice.reducer,
  },
});

console.log("ONCREATE STORE : ", store.getState());
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(
  keranjangSlice.actions.tambahKeKeranjang({ id: 1, kuantiti: 20 })
);
