import { combineReducers } from "redux";
import contacts from "./Contacts";
import theme from "./theme";

const reducers = {
  contacts,
  theme
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
