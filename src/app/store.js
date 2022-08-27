import { configureStore } from "@reduxjs/toolkit";
import activityReducer from '../features/activity/activitySlice'
import authReducer from '../features/auth/AuthSlice'
import enterpriseReducer from '../features/enterprise/enterpriseSlice'
import inventoryReducer from '../features/inventory/inventorySlice'
import clientReducer from '../features/client/clientSlice'
import payrollReducer from '../features/payroll/payrollSlice'

export const store = configureStore({
    reducer: {
        activity: activityReducer,
        auth: authReducer,
        enterprise: enterpriseReducer,
        inventory: inventoryReducer,
        clients: clientReducer,
        payroll: payrollReducer,
    }
})