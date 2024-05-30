import logo from '../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Drawer from './Drawer';
import useWindowWidth from '../Miscellaneous/useWindowWidth';


const Header = () => {
    const windowWidth = useWindowWidth();
    return (
        <header className="bg-slate-200 shadow-md text-center">
            <div className="flex h-20 justify-between md:items-center max-w-7xl mx-auto ">
                <Link to={"/"}>
                    <img src={logo} className="h-16" alt="business directory" />
                </Link>
                <form className='hidden md:flex bg-slate-100  px-3 h-3/4 rounded-lg w-2/5 items-center '>
                    <input className='bg-transparent w-7/12 h-full focus:ring-0 border-0' type="text" placeholder="Search local business in india" />
                    <input className='bg-transparent w-4/12 h-full focus:ring-0 border-0 border-l-2 focus-visible:border-l-2 pl-2 border-l-slate-300 focus:border-l-slate-300' type="text" placeholder="Location" />
                    <FaSearch className='text-slate-600 w-1/12 cursor-pointer' />
                </form>
                <div className='my-auto'>
                    {windowWidth >= 1000 ? <Navbar /> : <Drawer />}
                </div>
            </div>
        </header>
    )
};

export default Header;
