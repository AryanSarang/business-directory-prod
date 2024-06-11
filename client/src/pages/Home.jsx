import { useEffect } from 'react';

import Banner from "../components/HomePage/Banner";
import Conversions from "../components/HomePage/Conversions";
import HowItWorks from "../components/HomePage/HowItWorks";
import { useDispatch } from 'react-redux';
import { clearError } from '../redux/user/userSlice';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearError());
    }, []);
    return (
        <main className="md:pt-12">
            <Banner />
            <Conversions />
            <br className="h-1" id="process" />
            <HowItWorks />
        </main>

    )
};

export default Home;


