import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'https://drinkwaterpark.in/api/'

const initialState = {
    status: 'idle',
    error: null,
    employees: [],
    attendance: [],
    createdDate: [],
    todayDateId: [],
}

// create employee
export const createEmployee = createAsyncThunk('payroll/createEmployee', async (employeeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}/pay-roll/employee/`, employeeData, {headers: {'Authorization' : `Token ${token}`}})
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// edit employee
export const editEmployee = createAsyncThunk('payroll/editEmployee', async (editData, thunkAPI) => {
    const { id } = editData
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.put(`${baseUrl}/pay-roll/employee/${id}/`, editData, { headers: { 'Authorization': `Token ${token}` } })
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// get employees 
export const fetchEmployees = createAsyncThunk('payroll/fetchEmployees', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}/pay-roll/employee/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// delete employee
export const deleteEmployee = createAsyncThunk('payroll/deleteClient', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.delete(`${baseUrl}/pay-roll/employee/${id}`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// create attendance
export const createAttendance = createAsyncThunk('payroll/createAttendance', async (attendData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}attendence/attendence/`, attendData, {headers: {'Authorization' : `Token ${token}`}})
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// edit/update attendance
export const updateAttendance = createAsyncThunk('payroll/updateAttendance', async (updateAttend, thunkAPI) => {
    const { id } = updateAttend
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.put(`${baseUrl}attendence/attendence/${id}/`, updateAttend, {headers: {'Authorization' : `Token ${token}`}})
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// get attendance data 
export const fetchAttendance = createAsyncThunk('payroll/fetchAttendance', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}attendence/attendence/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// create Date
export const createDate = createAsyncThunk('payroll/createDate', async (dateToday, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.auth.authToken
        const res = await axios.post(`${baseUrl}attendence/date/`, dateToday, {headers: {'Authorization' : `Token ${token}`}})
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// get date list
export const getDateList = createAsyncThunk('payroll/getDateList', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}attendence/date/`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

// get today's date id
export const getTodayDate = createAsyncThunk('payroll/getTodayDate', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.auth.authToken
    const res = await axios.get(`${baseUrl}attendence/date/${id}`, {headers: {'Authorization' : `Token ${token}`}})
    return res.data
})

const payrollSlice = createSlice({
    name: "payroll",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(createEmployee.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(createEmployee.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.employees.push(action.payload)
        })
        .addCase(createEmployee.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
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
        .addCase(editEmployee.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(editEmployee.fulfilled, (state, action) => {
            const employeeListArr = state.employees
            employeeListArr.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.bank_details.bank_name = action.payload.bank_details.bank_name;
                    item.bank_details.account_holder_name = action.payload.bank_details.account_holder_name;
                    item.bank_details.account_no = action.payload.bank_details.account_no;
                    item.bank_details.ifsc_code = action.payload.bank_details.ifsc_code;
                    item.salary_detail.basic_salary = action.payload.salary_detail.basic_salary;
                    item.salary_detail.deatness_allowance = action.payload.salary_detail.deatness_allowance;
                    item.salary_detail.travelling_allowance = action.payload.salary_detail.travelling_allowance;
                    item.salary_detail.food_allowance = action.payload.salary_detail.food_allowance;
                    item.salary_detail.petrol_allowance = action.payload.salary_detail.petrol_allowance;
                    item.salary_detail.provident_fund = action.payload.salary_detail.provident_fund;
                    item.salary_detail.employee_state_insurance = action.payload.salary_detail.employee_state_insurance;
                    item.first_name = action.payload.first_name
                    item.sur_name = action.payload.sur_name
                    item.department = action.payload.department
                    item.post = action.payload.post
                    item.mobile = action.payload.mobile
                    item.email_id = action.payload.email_id
                    item.employee_code = action.payload.employee_code
                    item.aadhar_no = action.payload.aadhar_no
                    item.pan_details = action.payload.pan_details
                }
            });
            state.employees = [...employeeListArr];
            state.status = 'succeeded'
        })
        .addCase(editEmployee.rejected, (state, action) => {
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
        .addCase(createAttendance.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(createAttendance.fulfilled, (state, action) => {
            state.status = 'succeeded'
           state.attendance.push(action.payload)
        })
        .addCase(createAttendance.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchAttendance.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchAttendance.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.attendance = action.payload
        })
        .addCase(fetchAttendance.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(updateAttendance.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(updateAttendance.fulfilled, (state, action) => {
            const attendanceListArr = state.attendance
                attendanceListArr.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.absent = action.payload.absent;
                        item.present = action.payload.present;
                        item.half_day = action.payload.half_day;
                        item.attendence_date = action.payload.attendence_date;
                        item.employee = action.payload.employee;                     
                    }
                });
                state.attendance = [...attendanceListArr];
                state.status = 'succeeded'
        })
        .addCase(updateAttendance.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(createDate.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(createDate.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.createdDate.push(action.payload)
        })
        .addCase(createDate.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(getDateList.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getDateList.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.createdDate = action.payload
        })
        .addCase(getDateList.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(getTodayDate.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getTodayDate.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.todayDateId = action.payload
        })
        .addCase(getTodayDate.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default payrollSlice.reducer