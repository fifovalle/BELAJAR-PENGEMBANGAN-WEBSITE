// Reducer

import { legacy_createStore } from "redux";

const kartuReducer = (
  state = {
    keranjang: [{ id: 1, kuantiti: 1 }],
  },
  action
) => {
  switch (action.type) {
    case "TAMBAH_KE_KERANJANG":
      return {
        ...state,
        keranjang: [...state.keranjang, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(kartuReducer);
console.log("Oncreate : ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Onchange : ", store.getState());
});

// Dispatch
const action1 = {
  type: "TAMBAH_KE_KERANJANG, payload: {id: 2, kuantiti: 10}",
};
store.dispatch(action1);
