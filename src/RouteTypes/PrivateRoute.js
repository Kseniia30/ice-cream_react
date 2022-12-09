import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logged } from 'redux/authorization/selectors';

export const PrivateRoute = ({ children, ...routePath }) => {
    const isLoggedIn = useSelector(logged);
    return isLoggedIn ? children : <Navigate to="/" />
}