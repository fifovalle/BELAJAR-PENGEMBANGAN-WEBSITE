import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const tambahKeKeranjang = createAction("TAMBAH_KE_KERANJANG");

const keranjangReducer = createReducer([], (pembangun) => {
  pembangun.addCase(tambahKeKeranjang, (state, action) => {
    state.push(action.payload);
  });
});

const masuk = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (pembangun) => {
  pembangun.addCase(masuk, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    masuk: loginReducer,
    keranjang: keranjangReducer,
  },
});

console.log("ONCREATE STORE : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(tambahKeKeranjang({ id: 1, kuantiti: 20 }));
store.dispatch(tambahKeKeranjang({ id: 2, kuantiti: 20 }));
store.dispatch(masuk());
