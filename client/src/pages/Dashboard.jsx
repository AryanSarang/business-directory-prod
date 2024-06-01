
import Profile from '../components/Profile';


const Dashboard = () => {

    return (
        <main className="w-10/12 my-16 mx-auto">
            <div className="upper flex flex-col-reverse md:flex-row justify-between">
                <div className="listing w-full md:w-4/12">Listing</div>
                <div className="consult w-full md:w-4/12">Consultancy</div>
                <Profile />
            </div>
            <div className="review lower">Review</div>
        </main>
    );
};

export default Dashboard;
