import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
  searchTerm: "",
  images: null,
  starredContacts: []

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

    addStarredContacts: (state,{payload}) => {
      state.starredContacts = payload;
    }
  
  },
});

export const { addContact, setSearchTerm, setimages, addStarredContacts } = contactSlice.actions;
export default contactSlice.reducer;
