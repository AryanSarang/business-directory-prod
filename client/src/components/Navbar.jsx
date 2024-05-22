import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="bg-slate-200 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">

                <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center ml-auto p-2 w-10 h-20 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-multi-level" aria-expanded="false">

                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
                     md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <Link to={"/"}> <li>
                            <a href="#" class="block py-2 px-3  md:border-0 
                            md:p-0 text-black" aria-current="page">Home</a>
                        </li> </Link>
                        <Link to={"/categories"}>
                            <li>
                                <a href="#" class="block py-2 px-3 rounded md:border-0 
                            md:p-0 text-black">Categories</a>
                            </li></Link>
                        <Link to={"/allbusiness"}><li>
                            <a href="#" class="block py-2 px-3  md:border-0 
                            md:p-0 text-black">All Business</a>
                        </li></Link>
                        <Link to={"/contact"}><li>
                            <a href="#" class="block py-2 px-3 md:border-0 
                            md:p-0 text-black">Contact Us</a>
                        </li></Link>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center  w-full py-2 px-3 
                            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Profile <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                            <div id="dropdownNavbar" class="z-10 hidden font-normal  divide-y  rounded-lg shadow w-44">
                                <ul class="py-2 text-sm text-black " aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-black">Dashboard</a>
                                    </li>

                                    <li>
                                        <a href="#" class="block px-4 py-2 text-black">Settings</a>
                                    </li>
                                </ul>
                                <Link to={"/login"}>
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-black">Sign out</a>
                                    </div></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
