import { configureStore } from "@reduxjs/toolkit";
import activityReducer from '../features/activity/activitySlice'
import authReducer from '../features/auth/AuthSlice'

export const store = configureStore({
    reducer: {
        activity: activityReducer,
        auth: authReducer
    }
})