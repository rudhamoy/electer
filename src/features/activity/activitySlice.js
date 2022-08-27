import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu : true,
    modalBtn: ''
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
        },
        modalBtnCondition: (state, action) => {
            state.modalBtn = action.payload
        },
    }
})

export const { activeMenuFunc, hideSidebar, modalBtnCondition } = activitySlice.actions

export default activitySlice.reducer