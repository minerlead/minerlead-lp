import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface State {
  user: User | null;
  organizations: Array<Organization> | null;
  settings: Array<Settings> | null;
  selectedOrganizationID: string | null;
}

const initialState: State = {
  user: null,
  organizations: null,
  settings: null,
  selectedOrganizationID: null,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    setOrganizations: (state, action: PayloadAction<Array<Organization>>) => {
      // eslint-disable-next-line no-param-reassign
      state.organizations = action.payload;
    },
    setSettings: (state, action: PayloadAction<Array<Settings>>) => {
      // eslint-disable-next-line no-param-reassign
      state.settings = action.payload;
    },
    setSelectedOrganizationID: (
      state,
      action: PayloadAction<string | null>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedOrganizationID = action.payload;
    },
  },
});

export const {
  setUser,
  setOrganizations,
  setSettings,
  setSelectedOrganizationID,
} = slice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectOrganizations = (state: RootState) =>
  state.user.organizations;
export const selectSettings = (state: RootState) => state.user.settings;
export const selectSelectedOrganizationID = (state: RootState) =>
  state.user.selectedOrganizationID;

export default slice.reducer;
