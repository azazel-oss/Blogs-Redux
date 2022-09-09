import postsReducer from "./postsReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
  posts: postsReducer,
  user: userReducer,
});
