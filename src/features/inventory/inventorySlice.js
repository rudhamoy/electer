import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://37.44.244.212/api/'

const initialState = {
    status: 'idle',
    error: null,
    products: [],
    category: [],
    subCategory: [],
    particular: [],

}

// create Products
export const createProduct = createAsyncThunk('inventory/createProduct', async (productData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}/product/`, productData, {headers: {'Authorization' : `Token ${token}`}})
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// edit client
export const editProduct = createAsyncThunk('client/editProduct', async (editData, thunkAPI) => {
    const { id } = editData
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.put(`${baseUrl}product/${id}/`, editData, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// get product list
export const fetchProducts = createAsyncThunk('inventory/fetchProducts', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/product/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// get product category
export const fetchCat = createAsyncThunk('inventory/fetchCat', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/product-category/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// get product sub-category
export const fetchSubCat = createAsyncThunk('inventory/fetchSubCat', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/sub-category/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// get product particular
export const fetchParticular = createAsyncThunk('inventory/fetchParticular', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/perticulars/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// delete product 
export const deleteProduct = createAsyncThunk('inventory/deleteProduct', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.delete(`${baseUrl}/product/${id}`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(createProduct.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products.push(action.payload)
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(editProduct.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(editProduct.fulfilled, (state, action) => {
            const productListArr = state.products
            productListArr.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.item_name = action.payload.item_name;
                    item.sku = action.payload.sku;
                    item.quantity = action.payload.quantity;
                    item.UOM = action.payload.UOM;
                    item.price = action.payload.price;
                    item.size = action.payload.size;
                    item.thickness = action.payload.thickness;
                    item.material = action.payload.material;
                    item.color = action.payload.color;
                    item.model = action.payload.model;
                    item.perticulars.name = action.payload.perticulars.name
                }
            });
            state.clients = [...productListArr];
            state.status = 'succeeded'
        })
        .addCase(editProduct.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(deleteProduct.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            let index = state.products.findIndex(item => item.id === action.payload)
            state.products.splice((index + 1), 1)
            state.status = 'succeeded'
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default inventorySlice.reducer