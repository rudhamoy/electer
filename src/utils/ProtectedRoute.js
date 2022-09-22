import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    let auth = {
        token: false
    }

    const logged = JSON.parse(window.localStorage.getItem('user'))
    const system = JSON.parse(window.localStorage.getItem('systemUID'))
    console.log('protected Route', system)
    if (logged !== null) {
        auth.token = true
    }

    return (
        auth.token ? system?.systemUserId !== null ? <Outlet /> : <Navigate to="/register?tab=addInfo" /> : <Navigate to="/login" />
    )
}

export default ProtectedRoute