import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu : true,
}


const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        activeMenuFunc : (state, action) => {
            state.activeMenu = !state.activeMenu
        },
        hideSidebar: (state, action) => {
            state.activeMenu = action.payload
        }
    }
})

export const { activeMenuFunc, hideSidebar } = activitySlice.actions

export default activitySlice.reducer