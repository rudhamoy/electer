import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://37.44.244.212/api'

const initialState = {
    status: 'idle',
    error: null,
    invoices: [],
}

// INVOICE
// create invoice
export const createSalesInvoice = createAsyncThunk('bills/createSalesInvoice', async (invoiceData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}/accounts/sales/invoice/`, invoiceData, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// fetch invoice
export const fetchSalesInvoice = createAsyncThunk('bills/fetchSalesInvoice', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/accounts/sales/invoice/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})


const billsSlice = createSlice({
    name: "bills",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createSalesInvoice.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createSalesInvoice.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.invoices.push(action.payload)
            })
            .addCase(createSalesInvoice.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchSalesInvoice.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSalesInvoice.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.invoices = action.payload
            })
            .addCase(fetchSalesInvoice.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default billsSlice.reducer