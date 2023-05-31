"use client";

import { MyCourseState } from "@/interfaces/Course";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: MyCourseState[] = []

export const myCoursesSlice = createSlice({
    name: "myCourses",
    initialState,
    reducers: {
        changeMyCourses: (state, action: PayloadAction<MyCourseState>) => {
            if (state.every(element => element.uuid !== action.payload.uuid)) {
                state.push(action.payload);
            }
        }
    }
})

export const { changeMyCourses } = myCoursesSlice.actions;

export default myCoursesSlice.reducer;