import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const activeModalSlice = createSlice({
  name: 'activeModal',
  initialState,
  reducers: {
    changeActiveModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveModal } = activeModalSlice.actions;

export default activeModalSlice.reducer;
