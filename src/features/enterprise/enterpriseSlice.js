import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://37.44.244.212/api/'

const initialState = {
    status: 'idle',
    error: null,
    business: [],
    businessAddress: [],
    businessType: [],
    industryType: []

}

export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

const enterpriseSlice = createSlice({
    name: "enterprise",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBusiness.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBusiness.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.business = action.payload
        })
        .addCase(fetchBusiness.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default enterpriseSlice.reducer