import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ThemeState {
  color: string;
}

const initialState: ThemeState = {
  color: "primary",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.color = action.payload;
    },
  },
});

export const { setColor } = themeSlice.actions;

export const selectColor = (state: RootState) => state.theme.color;

export default themeSlice.reducer;
