import { combineReducers } from "redux";
import ThemeReducer from "./theme";
import SidebarReducer from "./sidebar";
import BreadcrumbReducer from "./breadcrumb";

export const reducers = combineReducers({
  SidebarReducer,
  ThemeReducer,
  BreadcrumbReducer,
});

export default reducers;
