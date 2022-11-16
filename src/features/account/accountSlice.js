import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'https://drinkwaterpark.in/api'

const initialState = {
    status: 'idle',
    error: null,
    sales: [],
    saleById: {},
    selectedSalesList: []
}

// create sales
export const createSales = createAsyncThunk('accounts/createSales', async (salesData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}/accounts/sales-order/`, salesData, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// fetch sales
export const fetchSales = createAsyncThunk('accounts/fetchClients', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/accounts/sales-order/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// fetch sales by id
export const fetchSaleById = createAsyncThunk('accounts/fetchSaleById', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/accounts/sales-order/${id}`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})


const accountSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
    
    },
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
            .addCase(fetchSaleById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSaleById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.saleById = action.payload
            })
            .addCase(fetchSaleById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})


export default accountSlice.reducer