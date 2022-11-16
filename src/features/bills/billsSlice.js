import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'https://drinkwaterpark.in/api'

const initialState = {
    status: 'idle',
    error: null,
    invoices: [],
    purchaseInvoice: [],
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
// fetch purchase invoice
export const fetchReceiveInvoice = createAsyncThunk('bills/fetchReceiveInvoice', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/accounts/purchase/invoice/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// create purchase invoice
export const createReceivedInvoice = createAsyncThunk('bills/createReceivedInvoice', async (submitData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}/accounts/purchase/invoice/`, submitData, { headers: { 'Authorization': `Token ${token}` } })
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
            .addCase(createReceivedInvoice.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createReceivedInvoice.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.purchaseInvoice.push(action.payload)
            })
            .addCase(createReceivedInvoice.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchReceiveInvoice.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchReceiveInvoice.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.purchaseInvoice = action.payload
            })
            .addCase(fetchReceiveInvoice.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default billsSlice.reducer