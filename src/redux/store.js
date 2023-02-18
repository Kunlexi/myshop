import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware
});

export default store;
