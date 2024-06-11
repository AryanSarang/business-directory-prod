
import { useEffect } from 'react';
import ConsultDashboard from '../components/Dashboard/ConsultDashboard';
import ListingDashboard from '../components/Dashboard/ListingDashboard';
import Profile from '../components/Dashboard/Profile';
import ReviewDashboard from '../components/Dashboard/ReviewDashboard';
import { useDispatch } from 'react-redux';
import { clearError } from '../redux/user/userSlice';


const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearError());
    }, []);
    return (
        <main className="w-10/12 md:py-40 mx-auto">
            <div className="upper flex mb-5 gap-5 flex-col-reverse md:flex-row justify-between">
                <ConsultDashboard />
                <ListingDashboard />
                <Profile />
            </div>
            <ReviewDashboard />
        </main>
    );
};

export default Dashboard;
