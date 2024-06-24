
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearError, signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
import OAuth from "../components/OAuth";

const Signup = () => {
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }
    useEffect(() => {
        dispatch(clearError());
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate("/");
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    };
    return (
        <div className="p-3 max-w-lg mx-auto py-20 pb-40 md:py-40">
            <h1 className="text-3xl md:text-5xl text-center font-semibold my-7 gilroy-bold">
                Sign Up
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Username" className="border p-3 rounded-lg"
                    id="username" onChange={handleChange} />
                <input type="email" placeholder="Email" className="border p-3 rounded-lg"
                    id="email" onChange={handleChange} />
                <input type="password" placeholder="Password" className="border p-3 rounded-lg"
                    id="password" onChange={handleChange} />
                <button disabled={loading} className="bg-slate-700 text-white p-3 uppercase rounded-lg
                hover:opacity-90 disabled:opacity-80" >
                    {loading ? 'Loading...' : 'Sign Up'}</button>
                <OAuth />
            </form>
            <div className="flex gap-2 mt-5">
                <p className="font-semibold">Already have an account?</p>
                <Link to={"/login"}>
                    <span className="text-blue-700">Log in</span>
                </Link>
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
};

export default Signup;
