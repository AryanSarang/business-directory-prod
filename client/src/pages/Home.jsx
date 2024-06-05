import Crousel from "../components/Crousel";
import { FaLongArrowAltRight, FaChartLine } from 'react-icons/fa';
const Home = () => {
    return (
        <main className="py-10 md:py-16 px-4 md:px-32">
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
                    <div>
                        <button></button>
                        <button></button>
                    </div>

                </div>
                <div className="w-full md:w-2/4 mt-12 md:mt-0">
                    <Crousel />
                </div>
            </div>

        </main>

    )
};

export default Home;


