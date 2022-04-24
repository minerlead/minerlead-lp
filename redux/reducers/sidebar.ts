import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.isOpen = action.payload;
    },
  },
});

export const { setOpen } = sidebarSlice.actions;

export const selectOpen = (state: RootState) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
