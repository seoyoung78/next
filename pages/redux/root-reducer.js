import { combineReducers } from "redux";
import colorReducer from "./color-reducer";
import authReducer from "./auth-reducer";

const rootReducer =  combineReducers({
  colorReducer: colorReducer,
  authReducer
});

export default rootReducer;