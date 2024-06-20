import aboutBanner from '../assets/aboutBanner.webp';

const About = () => {
    return (
        <main className="py-16 md:p-32 px-4">
            <div className='md:flex'>
                <div>
                    <h1 className="text-5xl md:text-7xl bannerHeading ">
                        Start growing
                    </h1>
                    <h1 className="text-5xl md:text-7xl gilroy-extraBold bannerHeading">
                        your business <br /> today
                    </h1>
                    <h3 className="text-xl md:text-2xl mt-10 md:mt-5">
                        Get consultant from industry leading professionals
                        <br />
                        Make an impact in your domain
                    </h3>
                </div>
                <div className="w-full md:w-5/12 mt-10 md:mt-3 md:ms-auto ">
                    <img src={aboutBanner} alt='about banner' className=' w-full' />
                </div>
            </div>

            <div>

            </div>
        </main>
    )
};

export default About;
