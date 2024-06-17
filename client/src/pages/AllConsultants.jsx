import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardAllConsultant from "../components/CardAllConsultant";
import { clearError } from "../redux/user/userSlice";

const AllConsultants = () => {
    const [consultants, setConsultants] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearError());
        const getConsultants = async () => {
            try {
                const res = await fetch("/api/auth/allconsultants", {
                    method: "GET",
                });
                const data = await res.json();
                console.log(data);
                if (data.success) {
                    const approvedConsultants = data.data.filter(consultant => consultant.approved === "approved");
                    setConsultants(approvedConsultants);
                } else {
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getConsultants();
    }, []);
    return (
        <main className="py-16 md:p-32">
            <h1 className="text-3xl md:text-5xl text-center mb-16 font-semibold tracking-wider">Find a mentor, you <b className="gilroy-extraBold">admire</b></h1>
            <div className="flex items-center gap-5 flex-wrap">
                {consultants.map((consultant, index) => (
                    <CardAllConsultant key={index} consultant={consultant} />
                ))}
            </div>
        </main>
    )
};

export default AllConsultants;
