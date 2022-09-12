import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://37.44.244.212/api/'

const initialState = {
    status: 'idle',
    error: null,
    business: [],
    bizAddress: [],
    businessById: {},
    businessAddressById: {},
    businessType: [],
    industryType: []

}

export const createBusiness = createAsyncThunk('business/createBusiness', async (businessData, thunkAPI) => {
    const {businessType, industryTypes, companyName, country, states, locality, pin, landmark } = businessData

    const token = thunkAPI.getState().auth.auth.authToken

    try {
        const res1 = await axios.post(`${baseUrl}/business-type/`, { name: businessType }, { headers: { 'Authorization': `Token ${token}` } })
    console.log('Business Type = ', res1)

    const res2 = await axios.post(`${baseUrl}/industry-type/`, { name: industryTypes }, { headers: { 'Authorization': `Token ${token}` } })
    console.log('Industry Type = ', res2)

    const res3 = await axios.post(`${baseUrl}/business/`, { company_name: companyName, business_type: res1.data.id, IndustryType: res2.data.id }, { headers: { 'Authorization': `Token ${token}` } })
    console.log('Business = ', res3)
    
    const res4 = await axios.post(`${baseUrl}/business-address/`, { country, state: states, locality, pin, remarks: landmark, business: res3.data.id }, { headers: { 'Authorization': `Token ${token}` } })
    console.log('Business Address = ', res4)

    return res3.data
    } catch (error) {
        console.log(error)
    }
})

export const fetchBizAddress = createAsyncThunk('business/fetchBizAddress', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business-address/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

export const fetchBusinessAddressById = createAsyncThunk('business/fetchBusinessAddressById', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business-address/${id}/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

export const updateBizAddress = createAsyncThunk('business/updateBizAddress', async (updateData, thunkAPI) => {
    const { id, data } = updateData
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.put(`${baseUrl}/business-address/${id}`, data, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

export const fetchBusinessById = createAsyncThunk('business/fetchBusinessById', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business/${id}/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

export const fetchBusinessType = createAsyncThunk('business/fetchBusinessType', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business-type/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

export const fetchIndustryType = createAsyncThunk('business/fetchIndustryType', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/industry-type/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

const enterpriseSlice = createSlice({
    name: "enterprise",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(createBusiness.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(createBusiness.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.business.push(action.payload)
        })
        .addCase(createBusiness.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchBusiness.pending, (state) => {
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
        .addCase(fetchBizAddress.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBizAddress.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.bizAddress = action.payload
        })
        .addCase(fetchBizAddress.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(updateBizAddress.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(updateBizAddress.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.businessAddressById = action.payload
        })
        .addCase(updateBizAddress.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchBusinessById.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBusinessById.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.businessById = action.payload
        })
        .addCase(fetchBusinessById.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchBusinessAddressById.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBusinessAddressById.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.businessAddressById = action.payload
        })
        .addCase(fetchBusinessAddressById.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchBusinessType.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBusinessType.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.businessType = action.payload
        })
        .addCase(fetchBusinessType.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchIndustryType.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchIndustryType.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.industryType = action.payload
        })
        .addCase(fetchIndustryType.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default enterpriseSlice.reducer