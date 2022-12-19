import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserSession: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_SESSION: (state, action) => {
      state.currentUserSession = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function.
export const { USER_SESSION } = userSlice.actions;
// Exports the slice's reducer.
export default userSlice.reducer;
