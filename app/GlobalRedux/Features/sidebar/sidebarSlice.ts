"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface sidebarState {
    isOpen: boolean;
}

const initialState: sidebarState = {
    isOpen: false
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        open: (state) => { state.isOpen = true },
        close: (state) => { state.isOpen = false },
        toggle: (state) => { state.isOpen = !state.isOpen },
    }
})

export const { open, close, toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;