import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entity: '&dollar;',
  id: 0,
  type: 'USD',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.entity = action.payload?.entity
        ? action.payload.entity
        : '&dollar;';
      state.id = action.payload?.id ? action.payload.id : 0;
      state.type = action.payload?.type ? action.payload.type : 'USD';
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
