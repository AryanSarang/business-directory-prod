import { useEffect, useState } from 'react';
import { FaUser, FaPhoneAlt, FaStar, FaRupeeSign } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { consulatantFormFailure, consulatantFormStart, consulatantFormSuccess, clearError } from '../redux/user/userSlice.js';

const ApplyConsultant = () => {
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        specialization: "Performance Marketing",
        userId: currentUser._id
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [status, setStatus] = useState(null);

    useEffect(() => {
        dispatch(clearError());
    }, []);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            dispatch(consulatantFormStart());
            const res = await fetch("/api/user/applyconsultant", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(consulatantFormFailure(data.message));
                setStatus(data.message);
                return;
            }
            dispatch(consulatantFormSuccess());
            setStatus("Thank you for applying, we will verify your details and reach out to you.");
        } catch (error) {
            dispatch(consulatantFormFailure(error.message));
            setStatus(error.message);
        }
    }

    return (
        <div className="pb-14 md:py-40 px-4 md:px-32 ">
            <h1 className='text-3xl md:text-5xl text-center font-semibold my-7 md:mb-24'>Become a consultant and <b className='gilroy-extraBold'> start earning</b></h1>

            <form className="md:w-1/2 mx-auto" onSubmit={handleSubmit}>
                <div className='md:flex justify-between gap-8'>
                    <div className="mb-5 md:w-6/12 ">
                        <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 ">Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaUser />
                            </div>
                            <input type="text" id="name" required onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Aryan Sarang" />
                        </div>
                    </div>
                    <div className="mb-5 md:w-6/12">
                        <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900">Phone</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaPhoneAlt />
                            </div>
                            <input type="tel" id="phone" required onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="9876543210" />
                        </div>
                    </div>
                </div>
                <div className='md:flex justify-between gap-8'>
                    <div className="mb-5 md:w-6/12 ">
                        <label htmlFor="specialization" className="block mb-2 text-md font-medium text-gray-900 ">Specialization</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaStar />
                            </div>
                            <select id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ">
                                <option>Performace Marketing</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-5 md:w-6/12 ">
                        <label htmlFor="feesPerConsultation" className="block mb-2 text-md font-medium text-gray-900 ">Charges per consultation</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaRupeeSign />
                            </div>
                            <input type="number" id="feesPerConsultation" required onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="2000" />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="experience" className="block mb-2 text-md font-medium text-gray-900">Experience</label>
                    <textarea id="experience" required onChange={handleChange} minLength={50} rows="4" className="block min-h-28 max-h-52 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                     border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Explain your experience in detail..."></textarea>
                </div>

                <button type="submit" className="bg-slate-700 text-white p-2 px-5  rounded-lg
                hover:opacity-90 disabled:opacity-80 tracking-wider">Apply for consulatant</button>
                <h5 className='my-5 '>After submission, Your details will be reviewed for registering as a consultant</h5>
            </form>
            <div className='md:w-1/2 mx-auto'>
                <p className='text-center'>{status}</p>

            </div>
        </div>
    )
};

export default ApplyConsultant;
