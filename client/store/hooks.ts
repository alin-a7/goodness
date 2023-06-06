import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "./store";
import { setCurrentUser, setCurrentUserId } from "./reducers/appReducer";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
  setCurrentUser,
  setCurrentUserId
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};
