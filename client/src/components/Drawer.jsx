import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { FaFire, FaBuilding, FaUser, FaBell, FaNewspaper, FaAddressCard, FaChartBar, FaUserTie, FaLayerGroup, FaStar, FaHome, FaHandshake } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import DrawerLogo from '../assets/drawerLogo.png';
import { logOutUserFailure, logOutUserStart, logOutUserSuccess } from "../redux/user/userSlice";
import { useDispatch } from 'react-redux';


const Drawer = () => {
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const handleLogOut = async () => {
        try {
            dispatch(logOutUserStart());
            const response = await fetch('/api/auth/logout');
            const data = await response.json();
            if (data.success === false) {
                dispatch(logOutUserFailure(data.message));
                return;
            }
            dispatch(logOutUserSuccess());
        } catch (error) {
            dispatch(logOutUserFailure(data.message));
        }
    }

    return (
        <>
            <div className="text-center">
                <button className="text-slate-900 rounded-lg text-sm px-5 py-2.5 " type="button" data-drawer-target="drawer-backdrop" data-drawer-show="drawer-backdrop" data-drawer-backdrop="true" aria-controls="drawer-backdrop">
                    <RiMenuUnfold4Line2 fontSize="35px" />
                </button>
            </div>

            <div id="drawer-backdrop" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white  w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-backdrop-label">

                <img src={DrawerLogo} alt="drawer logo" className="w-40 h-auto" />
                <button type="button" data-drawer-hide="drawer-backdrop" aria-controls="drawer-backdrop" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto h-95 flex flex-col justify-between">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <FaHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        {/* <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                                <FaLayerGroup className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Categories</span>
                                <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <Link to={"/"} className="flex items-center w-full p-2 text-gray-900 transition
                                     duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Health</Link>
                                </li>
                                <li>
                                    <Link to={"/"} className="flex items-center w-full p-2 text-gray-900 transition
                                     duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Food & Beverages</Link>
                                </li>
                                <li>
                                    <Link to={"/"} className="flex items-center w-full p-2 text-gray-900 transition 
                                    duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Education</Link>
                                </li>
                                <li>
                                    <Link to={"/"} className="flex items-center w-full p-2 text-gray-900 transition 
                                    duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">View all categories</Link>
                                </li>
                            </ul>
                        </li> */}
                        <li>
                            <Link to={"/allbusiness"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <FaUserTie className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />
                                <span className="flex justify-between w-full">
                                    <span className=" ms-3 whitespace-nowrap">All consultants</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/featured"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <FaStar className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />
                                <span className="flex justify-between w-full">
                                    <span className=" ms-3 whitespace-nowrap">Featured</span>
                                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"><FaFire /></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/applyconsultant"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <FaAddressCard className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />
                                <span className=" ms-3 whitespace-nowrap">Become a Consultant</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <FaBell className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />
                                <span className="flex justify-between w-full">
                                    <span className=" ms-3 whitespace-nowrap">Inbox</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <FaChartBar className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />
                                <span className="flex justify-between w-full">
                                    <span className=" ms-3 whitespace-nowrap">Performance marketing</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 px-5 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">new</span>
                                </span>
                            </Link>
                        </li>

                    </ul>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={"/dashboard"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {(currentUser) ? (<img className="flex-shrink-0 rounded-full w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " src={currentUser.avatar} />)
                                    : (<FaUser className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" />)
                                }
                                <span className=" ms-3 whitespace-nowrap">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            {
                                currentUser ?
                                    <Link to={"/login"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                        </svg>
                                        <span onClick={handleLogOut} className=" ms-3 whitespace-nowrap">Log out</span>
                                    </Link> :
                                    <Link to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                        </svg>
                                        <span className=" ms-3 whitespace-nowrap">Log In</span>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
};

export default Drawer;
