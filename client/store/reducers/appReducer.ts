import { createSlice } from "@reduxjs/toolkit";

import { User } from "../types/user";

const initialSatate: { currentUser: User } = {
  currentUser: {} as User,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialSatate,
  reducers: {
    setCurrentUser(state, action: { payload: User }) {
      state.currentUser = {...action.payload};
    },
  },
});

export const { setCurrentUser } = appSlice.actions;
export default appSlice.reducer;
