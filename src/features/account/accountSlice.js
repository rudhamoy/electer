import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://37.44.244.212/api'

const initialState = {
    status: 'idle',
    error: null,
    sales: [],

}

// create client
export const createSales = createAsyncThunk('accounts/createSales', async (salesData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}/accounts/sales/`, salesData, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// fetch client
export const fetchSales = createAsyncThunk('accounts/fetchClients', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/accounts/sales/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})


const accountSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createSales.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createSales.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.sales.push(action.payload)
            })
            .addCase(createSales.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchSales.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSales.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.sales = action.payload
            })
            .addCase(fetchSales.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export default accountSlice.reducer