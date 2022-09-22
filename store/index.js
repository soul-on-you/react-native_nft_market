import { configureStore } from "@reduxjs/toolkit";
import NTFReducer from "./slices/NFTSlice";

export const store = configureStore({
  reducer: {
    nft: NTFReducer,
  },
  //   preloadedState: NFTData,
  devTools: true,
});
