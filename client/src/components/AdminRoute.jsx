import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    const { currentUser } = useSelector((state) => state.user);
    if (currentUser) {
        return (currentUser.isAdmin === true) ? <Outlet /> : <Navigate to="/" />
    } else {
        return <Navigate to="/" />
    }
};

export default PrivateRoute;