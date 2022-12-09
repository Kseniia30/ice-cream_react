import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logged } from 'redux/authorization/selectors';

export const PublicRoute = ({ children, restricted = false }) => {
    const isLoggedIn = useSelector(logged);
    const shouldRedirect = isLoggedIn && restricted
    return shouldRedirect ? <Navigate to="/addcontacts" /> : children;
};