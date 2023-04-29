import { createSlice } from "@reduxjs/toolkit";

const initialSatate: { currentUserId: string } = {
  currentUserId: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialSatate,
  reducers: {
    setCurrentUserId(state, action: { payload: string }) {
      state.currentUserId = action.payload;
    },
  },
});

export const { setCurrentUserId } = appSlice.actions;
export default appSlice.reducer;
