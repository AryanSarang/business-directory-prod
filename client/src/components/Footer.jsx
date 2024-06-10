import { Link } from 'react-router-dom';
import longLogo from '../assets/longLogo.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className='flex flex-col md:flex-row bg-slate-900 justify-between text-white px-4 py-14 md:px-40 md:py-20'>
                <div className='mb-6'>
                    <Link to={"/"} >
                        <img src={longLogo} className="h-auto w-1/2 mb-6" alt="business directory" />
                    </Link>
                    <h5>548 Market St PMB 30073, San Francisco</h5>
                    <h5>cunsultantcomp@gmail.com</h5>
                    <h5>9876543210</h5>
                </div>
                <div className='flex md:justify-between gap-10 md:gap-10'>
                    <div>
                        <ul className="">
                            <li className='items-center'><Link to={"/categories"} className="block mb-3   pe-3 md:px-3  rounded md:border-0 
                            md:p-0">
                                About</Link>
                            </li>
                            <li><Link to={"/allbusiness"} className="block my-3  pe-3 md:px-3  md:border-0 
                            md:p-0 ">
                                Contact Us</Link>
                            </li>

                            <li><Link to={"/businessconsultancy"} className="block  my-3 pe-3 md:px-3  md:border-0 
                            md:p-0">
                                Terms of Service</Link>
                            </li>
                            <li><Link to={"/businessconsultancy"} className="block  my-3 pe-3 md:px-3  md:border-0 
                            md:p-0 ">
                                Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="me-10">
                            <li className='items-center'><Link to={"/categories"} className="block   mb-3 pe-3 md:px-3  rounded md:border-0 
                            md:p-0 ">
                                Blogs</Link>
                            </li>
                            <li><Link to={"/allbusiness"} className="block   my-3 pe-3 md:px-3   md:border-0 
                            md:p-0 ">
                                Link 1</Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className='bg-slate-900 text-center pb-4 text-white'>
                <h6>
                    © {year}  Company name
                </h6>
            </div>
        </footer>
    )
};

export default Footer;
