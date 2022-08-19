import { configureStore } from "@reduxjs/toolkit";
import activityReducer from '../features/activity/activitySlice'
// import usersReducer from '../features/users/userSlice'

export const store = configureStore({
    reducer: {
        activity: activityReducer,
        // users: usersReducer
    }
})