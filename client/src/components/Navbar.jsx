import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { currentUser } = useSelector(state => state.user);
    const [avatarKey, setAvatarKey] = useState(Date.now());
    useEffect(() => {
        if (currentUser) {
            setAvatarKey(Date.now());
        }
    }, [currentUser]);

    return (
        <nav className="bg-slate-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">


                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
                     md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">

                        <Link to={"/categories"}>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded md:border-0 
                            md:p-0 text-black">Categories</a>
                            </li></Link>
                        <Link to={"/allbusiness"}><li>
                            <a href="#" className="block py-2 px-3  md:border-0 
                            md:p-0 text-black">All Business</a>
                        </li></Link>
                        <Link to={"/contact"}><li>
                            <a href="#" className="block py-2 px-3 md:border-0 
                            md:p-0 text-black">Inbox</a>
                        </li></Link>
                        <Link to={"/businessconsultancy"}><li>
                            <a href="#" className="block py-2 px-3 md:border-0 
                            md:p-0 text-black">Business Consultancy</a>
                        </li></Link>
                        {
                            currentUser ?
                                <li className="relative">
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center w-full py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                        <img src={currentUser.avatar} key={avatarKey} alt="profile" className="rounded-full h-7 w-7 object-cover" />
                                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal divide-y divide-gray-200 rounded-lg shadow w-44 bg-white">
                                        <ul className="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Dashboard</a>
                                            </li>

                                        </ul>
                                        <Link to={"/login"}>
                                            <div className="py-1">
                                                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Sign out</a>
                                            </div>
                                        </Link>
                                    </div>
                                </li>

                                :
                                <Link to={"/login"}>
                                    <li className="text-slate-700 hover:underline">
                                        Log In
                                    </li>
                                </Link>

                        }


                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
