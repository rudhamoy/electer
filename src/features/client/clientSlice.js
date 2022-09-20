import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://37.44.244.212/api/'

const initialState = {
    status: 'idle',
    error: null,
    clients: [],
    clientById: {},

}

// create client
export const createClient = createAsyncThunk('client/createClient', async (clientData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}/client/`, clientData, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// fetch client
export const fetchClients = createAsyncThunk('client/fetchClients', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/client/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// get client by id
export const getClientById = createAsyncThunk('client/getClientById', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.get(`${baseUrl}/client/${id}/`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// edit client
export const editClient = createAsyncThunk('client/editClient', async (editData, thunkAPI) => {
    const { id } = editData
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.put(`${baseUrl}/client/${id}/`, editData, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// delete client
export const deleteClient = createAsyncThunk('client/deleteClient', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.delete(`${baseUrl}/client/${id}`, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createClient.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createClient.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.clients.push(action.payload)
            })
            .addCase(createClient.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchClients.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.clients = action.payload
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getClientById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getClientById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.clientById = action.payload
            })
            .addCase(getClientById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(editClient.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editClient.fulfilled, (state, action) => {
                
                const clientListArr = state.clients
                clientListArr.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.name = action.payload.name;
                        item.place_of_business = action.payload.place_of_business;
                        item.billing_address = action.payload.billing_address;
                        item.shipping_address = action.payload.shipping_address;
                        item.GSTIN = action.payload.GSTIN;
                        item.email = action.payload.email;
                        item.contact_person = action.payload.contact_person;
                        item.contact_person_designation = action.payload.contact_person_designation;
                        item.mobile_no = action.payload.mobile_no;
                        item.mobile_no = action.payload.mobile_no;
                    }
                });
                state.clients = [...clientListArr];
                state.status = 'succeeded'
            })
            .addCase(editClient.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteClient.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteClient.fulfilled, (state, action) => {
                // const id = action.payload
                // state.clients = state.clients.filter(item => item.id !== id)
                let index = state.clients.findIndex(item => item.id === action.payload)
                state.clients = state.clients.splice(index, 1)
                // let clientsArr = state.clients

                // clientsArr.forEach((item, index) => {
                //     if (item.id === action.payload) {
                //         clientsArr.splice(index, 1)
                //     }
                // });

                // state.clients = clientsArr
                state.status = 'succeeded'
            })
            .addCase(deleteClient.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default clientSlice.reducer