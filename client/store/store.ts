import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { userApi } from "./api/userApi";
import appSlice from "./reducers/appReducer";

export const rootReducer = combineReducers({
  app: appSlice,
  [userApi.reducerPath]: userApi.reducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(userApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
