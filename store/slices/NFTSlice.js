import { createSlice } from "@reduxjs/toolkit";
import { NFTData } from "../../constants";

const initialState = {
  NFTData: NFTData,
};

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    likeNFT(state, action) {
      const { NFTid, liked } = action.payload;
      const nft = state.NFTData.find((nft) => nft.id === NFTid);
      nft.liked = liked;
    },
    placeBid(state, action) {
      const { NFTid, id, name, price, image, date } = action.payload;
      const nft = state.NFTData.find((nft) => nft.id === NFTid);
      nft.bids.push({ id, name, price, image, date });
      nft.endDate = new Date() + 1000 * 60 * 60 * 24;
      nft.price = price;
    },
  },
});

export const { likeNFT, placeBid } = nftSlice.actions;

export const selectNFTData = (state) => state.nft.NFTData;
export const selectNTF = (id) => (state) =>
  state.nft.NFTData.find((nft) => nft.id === id);

export default nftSlice.reducer;
