import { createSlice } from "@reduxjs/toolkit";

import { User } from "../types";

const ISSERVER = typeof window === "undefined";
const isUserId = !ISSERVER && !!localStorage.getItem("userId");

interface InitialSatate {
  currentUser: User;
  currentUserId: string;
}

const initialSatate: InitialSatate = {
  currentUser: {} as User,
  currentUserId: isUserId ? localStorage.getItem("userId") || "" : "",
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialSatate,
  reducers: {
    setCurrentUser(state, action: { payload: User }) {
      state.currentUser = { ...action.payload };
    },
    setCurrentUserId(state, action: { payload: string }) {
      state.currentUserId = action.payload;
    },
  },
});

export const { setCurrentUser, setCurrentUserId } = appSlice.actions;
export default appSlice.reducer;
