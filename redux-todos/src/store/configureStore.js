import { createStore, combineReducers } from "redux";
import todos from "../reducers/todos";
import visibilityFilter from "../reducers/filters";

const store = createStore(
  combineReducers({
    todos,
    visibilityFilter
  })
);

export default store;
