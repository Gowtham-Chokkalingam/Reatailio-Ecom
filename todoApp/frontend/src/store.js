import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { registerReducer, userLoginReducer } from "./Redux/Reducers/userReducer";

const reducer = combineReducers({
  UserSignup: registerReducer,
  UserLogin: userLoginReducer,
});


const middleware = [thunk];
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
