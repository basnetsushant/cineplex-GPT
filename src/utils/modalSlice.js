import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    selectedMovie: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedMovie = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedMovie = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
