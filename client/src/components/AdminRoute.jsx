import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    const { currentUser } = useSelector((state) => state.user);

    return (currentUser.isAdmin === true) ? <Outlet /> : <Navigate to="/" />
};

export default PrivateRoute;