import { combineReducers } from "@reduxjs/toolkit";
import { reducer as userReducer } from "src/slices/user";
import { reducer as messagesReducer } from "src/slices/messages";
const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});
export default rootReducer;
