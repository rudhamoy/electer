import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://37.44.244.212/api/'

const initialState = {
    auth: {
        authToken: "",
        id: "",
        systemUserId: '',
    },
    systemUser: [],
    systemUserId: {}
}

const loggedUser = JSON.parse( window.localStorage.getItem('user'))

if(loggedUser) {
    initialState.auth.authToken = loggedUser.token
    initialState.auth.id = loggedUser.id
    initialState.auth.systemUserId = loggedUser.systemUserId
}


export const fetchSystemUser = createAsyncThunk('auth/fetchSystemUser', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/system-user/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        
    }
})

export const fetchSystemUserById = createAsyncThunk('auth/fetchSystemUserById', async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/system-user/${id}/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.auth = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchSystemUser.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchSystemUser.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.systemUser = action.payload
        })
        .addCase(fetchSystemUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchSystemUserById.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchSystemUserById.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.systemUserId = action.payload
        })
        .addCase(fetchSystemUserById.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer