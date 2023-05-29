'use client';

import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './Features/sidebar/sidebarSlice';
import currentPageReducer from './Features/currentPage/currentPageSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        currentPage: currentPageReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;