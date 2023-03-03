import { combineReducers } from "redux";
import bookReducer from "./books/Reducer";

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
