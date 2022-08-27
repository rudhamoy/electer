import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    let auth = {
        token: false
    }

    const logged = JSON.parse(window.localStorage.getItem('user'))
        if (logged !== null) {
            auth.token = true
        }

    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoute