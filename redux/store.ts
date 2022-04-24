import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import SidebarReducer from "./reducers/sidebar";
import ThemeReducer from "./reducers/theme";
import UserReducer from "./reducers/user";
import ProspectReducer from "./reducers/prospects";
import BreadcrumbReducer from "./reducers/breadcrumb";

export const store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
    theme: ThemeReducer,
    user: UserReducer,
    prospects: ProspectReducer,
    breadcrumb: BreadcrumbReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
