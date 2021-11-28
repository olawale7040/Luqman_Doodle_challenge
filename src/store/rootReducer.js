import { combineReducers } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../slices/user";
import { reducer as messagesReducer } from "../slices/messages";
const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});
export default rootReducer;
