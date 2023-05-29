"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CurrentPageState {
    value: string
}

const initialState: CurrentPageState = {
    value: "Dashboard"
}

export const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;