import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"
const initialState = {
  contact: [],
  searchTerm: "",
  images: null,
  imageSrc: "",
};
export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contact = payload;
    },

    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setimages: (state, { payload }) => {
      state.images = payload;
    },

    // imageSrc: (state, {payload}) =>{
    //   state.imageSrc = payload
    //   // Cookies.set("src",state.imageSrc);
    // }
  },
});

export const { addContact, setSearchTerm, setimages } = contactSlice.actions;
export default contactSlice.reducer;
