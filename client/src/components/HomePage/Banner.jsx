import Crousel from './Crousel';
import { FaLongArrowAltRight, FaChartLine } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="w-full md:w-2/4">
                <button className="flex items-center justify-between bg-slate-400 text-white border-2 border-slate-400 hover:text-slate-500 hover:bg-white rounded-full w-full md:w-3/5 py-3 px-5 mb-7">
                    <FaChartLine fontSize={25} /><span>Find your <b>marketing</b> companion</span> <FaLongArrowAltRight fontSize={25} />
                </button>
                <h1 className="text-5xl md:text-7xl bannerHeading ">
                    Start growing
                </h1>
                <h1 className="text-5xl md:text-7xl font-extrabold bannerHeading">
                    your business <br /> today
                </h1>
                <h3 className="text-xl md:text-2xl mt-5">
                    Get consultant from industry leading professionals
                    <br />
                    Make an impact in your domain
                </h3>
                <div className="flex md:w-5/6 gap-5 py-9">
                    <button className=" bg-zinc-950 text-white border-2 border-zinc-950 hover:text-white hover:bg-zinc-700 hover:border-zinc-700 w-1/2 rounded-md py-3 px-5 mb-7 ">Get a mentor</button>
                    <button className=" bg-transparent text-black border-2 border-black hover:text-white hover:bg-zinc-950 rounded-md w-1/2 py-3 px-5 mb-7 ">Check process</button>
                </div>
                <div className="flex">
                    <div className="flex -space-x-3 rtl:space-x-reverse">
                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                        <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                    </div>
                    <div className="flex flex-col px-5 align-middle text-center">
                        <div class="flex items-center gap-1 mb-1">
                            <svg class="w-6 h-6  text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-6 h-6 ms-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-6 h-6 ms-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-6 h-6 ms-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-6 h-6 ms-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <div className="font-medium text-sm">
                            5/5 by 100+ professionals
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/4 mt-12 md:mt-0">
                <Crousel />
            </div>
        </div>
    )
};

export default Banner;