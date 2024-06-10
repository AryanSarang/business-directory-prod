
import Banner from "../components/HomePage/Banner";
import Conversions from "../components/HomePage/Conversions";
import HowItWorks from "../components/HomePage/HowItWorks";

const Home = () => {
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


