import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'https://drinkwaterpark.in/api/'

const initialState = {
    status: 'idle',
    error: null,
    business: [],
    bizAddress: [],
    businessById: {},
    businessAddressById: {},
    businessType: [],
    industryType: [],
    bank: []

}

// create business
export const createBusiness = createAsyncThunk('business/createBusiness', async (businessData, thunkAPI) => {
    const {businessType, industryTypes, companyName, country, states, locality, pin, landmark, system_user } = businessData

    const token = thunkAPI.getState().auth.auth.authToken

    try {
        const res1 = await axios.post(`${baseUrl}/business-type/`, { name: businessType }, { headers: { 'Authorization': `Token ${token}` } })
    console.log('Business Type = ', res1)

    const res2 = await axios.post(`${baseUrl}/industry-type/`, { name: industryTypes }, { headers: { 'Authorization': `Token ${token}` } })
    console.log('Industry Type = ', res2)

    const res3 = await axios.post(`${baseUrl}/business/`, {system_user, company_name: companyName, business_type: res1.data.id, IndustryType: res2.data.id, business_address: {
        country,
        state: states,
        locality,
        pin,
        remarks: landmark,
        system_user
    } }, { headers: { 'Authorization': `Token ${token}` } })
    console.log('Business = ', res3)

    return res3.data
    } catch (error) {
        console.log(error)
    }
})

// update business by id
export const updateBusiness = createAsyncThunk('business/updateBusiness', async (updateData, thunkAPI) => {
    const { id, businessType, industryTypes, data } = updateData
    const token = thunkAPI.getState().auth.auth.authToken
   try {
    const res = await axios.put(`${baseUrl}/business/${id}/`, data, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
   } catch (error) {
    console.log(error)
   }
})

// delete business by id
export const deleteBusiness = createAsyncThunk('business/deleteBusiness', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.delete(`${baseUrl}/business/${id}/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// fetch business address
export const fetchBizAddress = createAsyncThunk('business/fetchBizAddress', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business-address/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// fetch business address by id
export const fetchBusinessAddressById = createAsyncThunk('business/fetchBusinessAddressById', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business-address/${id}/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// update business address
export const updateBizAddress = createAsyncThunk('business/updateBizAddress', async (updateData, thunkAPI) => {
    const { id, data } = updateData
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.put(`${baseUrl}/business-address/${id}`, data, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// fetch busines list
export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// fetch business by id
export const fetchBusinessById = createAsyncThunk('business/fetchBusinessById', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business/${id}/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// fetch business type
export const fetchBusinessType = createAsyncThunk('business/fetchBusinessType', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/business-type/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// fetch industry type
export const fetchIndustryType = createAsyncThunk('business/fetchIndustryType', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/industry-type/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// create bank 
export const createBank = createAsyncThunk('business/createBank', async (bankData, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.post(`${baseUrl}/bank/`, bankData, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})
// fetch bank 
export const fetchBank = createAsyncThunk('business/fetchBank', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/bank/`, {headers: {'Authorization' : `Token ${token}`}})
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
        .addCase(updateBusiness.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(updateBusiness.fulfilled, (state, action) => {
            const businessListArr = state.business
            businessListArr.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.company_name = action.payload.company_name
                    item.IndustryType.name = action.payload.IndustryType.name
                    item.business_type.name = action.payload.business_type.name
                    item.business_address.country = action.payload.business_address.country
                    item.business_address.pin = action.payload.business_address.pin
                    item.business_address.locality = action.payload.business_address.locality
                    item.business_address.remarks = action.payload.business_address.remarks
                    item.business_address.states = action.payload.business_address.states
                }
            });
            state.products = [...businessListArr];
            state.status = 'succeeded'
        })
        .addCase(updateBusiness.rejected, (state, action) => {
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
        .addCase(deleteBusiness.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(deleteBusiness.fulfilled, (state, action) => {
            const businessListArr = state.business
            businessListArr.filter(item => item.id !== action.payload.id)
            state.business = [...businessListArr];
            state.status = 'succeeded'
        })
        .addCase(deleteBusiness.rejected, (state, action) => {
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
        // create Bank
        .addCase(createBank.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(createBank.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.bank = action.payload
        })
        .addCase(createBank.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        // fetch bank details
        .addCase(fetchBank.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBank.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.bank = action.payload
        })
        .addCase(fetchBank.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default enterpriseSlice.reducer