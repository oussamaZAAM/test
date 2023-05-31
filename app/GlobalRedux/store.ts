'use client';

import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './Features/sidebar/sidebarSlice';
import currentPageReducer from './Features/currentPage/currentPageSlice';
import myCoursesReducer from './Features/myCourses/myCoursesSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        currentPage: currentPageReducer,
        myCourses: myCoursesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;