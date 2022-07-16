import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entity: 'US',
  id: 0,
  name: 'United States',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    changeCountry: (state, action) => {
      state.name = action.payload?.name ? action.payload.name : 'United States';
      state.id = action.payload?.id ? action.payload.id : 0;
      state.entity = action.payload?.entity ? action.payload.entity : 'US';
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCountry } = countrySlice.actions;

export default countrySlice.reducer;
