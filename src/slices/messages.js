import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";
const myToken = "6sQgBPf4EnBJ";

const initialState = {
  messages: [],
};

const slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    fetchMessages(state, action) {
      state.messages = action.payload;
    },
    createMessage(state, action) {
      const { payload } = action;
      state.messages.push(payload);
    },
  },
});

export const reducer = slice.reducer;

// Get All Messages
export const fetchMessages = () => async (dispatch) => {
  try {
    const response = await axios.get(`?token=${myToken}`);
    console.log(response.data);
    if (response.status == 200) {
      dispatch(slice.actions.fetchMessages(response.data));
    }
  } catch (err) {
    return err.message;
  }
};

// Create Message
export const createMessage = (data) => async (dispatch) => {
  try {
    dispatch(slice.actions.createMessage(data));
    const response = await axios.post(`?token=${myToken}`, data);
  } catch (err) {
    return err.message;
  }
};
