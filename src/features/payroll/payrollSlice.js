import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://37.44.244.212/api/'

const initialState = {
    status: 'idle',
    error: null,
    employees: [],

}

export const fetchEmployees = createAsyncThunk('business/fetchEmployees', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/pay-roll/employee/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

export const deleteEmployee = createAsyncThunk('business/deleteClient', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.delete(`${baseUrl}/pay-roll/employee/${id}`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

const payrollSlice = createSlice({
    name: "payroll",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchEmployees.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.employees = action.payload
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(deleteEmployee.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(deleteEmployee.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.employees = state.employees.filter(item => item.id !== action.payload.id)
        })
        .addCase(deleteEmployee.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default payrollSlice.reducer