import { combineReducers } from "redux";
import contacts from "./Contacts";

const reducers = {
  contacts
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
