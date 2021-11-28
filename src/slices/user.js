import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const createUser = slice.actions.createUser;

export default slice;
