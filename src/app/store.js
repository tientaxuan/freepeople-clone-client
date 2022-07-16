import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slices/countrySlice';
import currencyReducer from './slices/currencySlice';
import searchReducer from './slices/searchSlice';
import activeSuperNavReducer from './slices/activeSuperNav';
import activeModalReducer from './slices/activeModal';

export const store = configureStore({
  reducer: {
    activeSuperNav: activeSuperNavReducer,
    country: countryReducer,
    currency: currencyReducer,
    search: searchReducer,
    activeModal: activeModalReducer,
  },
});
