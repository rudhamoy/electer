import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://37.44.244.212/api/'

const initialState = {
    auth: {
        authToken: "",
        id: ""
    }
}

const loggedUser = JSON.parse( window.localStorage.getItem('user'))

if(loggedUser) {
    initialState.auth.authToken = loggedUser.token
    initialState.auth.id = loggedUser.id
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.auth = action.payload
        }
    }
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer