import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface State {
  breads: Array<Bread>;
}

const initialState: State = {
  breads: [],
};

export const slice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setBreadcrumb: (state, action: PayloadAction<Array<Bread>>) => {
      // eslint-disable-next-line no-param-reassign
      state.breads = action.payload;
    },
  },
});

export const {
  setBreadcrumb,
} = slice.actions;

export const selectBreadcrumb = (state: RootState) => state.breadcrumb.breads;

export default slice.reducer;
