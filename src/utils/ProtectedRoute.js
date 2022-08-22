import { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { UserOutlined } from '@ant-design/icons';

const ProtectedRoute = () => {
    // const user = useSelector(state => state.auth.auth);

    let auth = {
        token: false
    }

    const logged = JSON.parse(window.localStorage.getItem('user'))
        console.log(logged)
        if (logged !== null) {
            auth.token = true
        }



    console.log(auth)

    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoute