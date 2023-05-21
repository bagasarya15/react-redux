import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducers from '../reducer/userReducer';
import productReducers from '../reducer/productReducer';
import categoryReducers from '../reducer/categoryReducer';

const reducer = combineReducers({
  userReducer: userReducers,
  productReducer: productReducers,
  categoryReducer: categoryReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
