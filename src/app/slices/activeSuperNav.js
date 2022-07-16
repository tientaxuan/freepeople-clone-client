import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const activeSuperNavSlice = createSlice({
  name: 'activeSuperNav',
  initialState,
  reducers: {
    changeActiveSuperNav: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveSuperNav } = activeSuperNavSlice.actions;

export default activeSuperNavSlice.reducer;
