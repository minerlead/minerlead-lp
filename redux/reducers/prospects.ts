import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface State {
  prospects: Array<Prospect>;
  searchBackup: Array<Prospect>;
}

const initialState: State = {
  prospects: [],
  searchBackup: [],
};

export const slice = createSlice({
  name: "prospects",
  initialState,
  reducers: {
    setProspects: (state, action: PayloadAction<Array<Prospect>>) => {
      // eslint-disable-next-line no-param-reassign
      state.prospects = action.payload;
    },
    setSearchBackup: (state, action: PayloadAction<Array<Prospect>>) => {
      // eslint-disable-next-line no-param-reassign
      state.searchBackup = action.payload;
    },
  },
});

export const {
  setProspects,
  setSearchBackup
} = slice.actions;

export const selectProspects = (state: RootState) => state.prospects.prospects;
export const selectSearchBackup = (state: RootState) => state.prospects.searchBackup;

export default slice.reducer;
