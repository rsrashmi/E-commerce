import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUISlice from "./shopping-cart/cartUISlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import productsReducer from "./shopping-cart/productsSlice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = {
  cart: persistReducer(persistConfig, cartSlice.reducer),
  cartUI: persistReducer(persistConfig, cartUISlice.reducer),
  products: productsReducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
