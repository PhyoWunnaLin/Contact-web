import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

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
      // state.starredContacts = payload;
      state.starredContacts = [...state.starredContacts,{...payload}]
      // Cookies.set("star",JSON.stringify(state.starredContacts));
            
    },
    removeStarredContacts: (state,{payload}) => {
      state.starredContacts = state.starredContacts?.filter(contact => contact.id !== payload.id);
    }
  
  },
});

export const { addContact, setSearchTerm, setimages, addStarredContacts, removeStarredContacts } = contactSlice.actions;
export default contactSlice.reducer;
