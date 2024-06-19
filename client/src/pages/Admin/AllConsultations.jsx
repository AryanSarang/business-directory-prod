import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../../redux/user/userSlice";
import ConsultationCard from "./ConsultaionCard";

const Consultants = () => {
    const [consultations, setConsultations] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearError());
        const getConsultations = async () => {
            try {
                const token = localStorage.getItem("access_token");

                const res = await fetch("/api/admin/getAllConsultations", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await res.json();
                console.log(data);
                if (data.success) {
                    setConsultations(data.data);
                } else {
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }

        }
        getConsultations();
    }, []);
    return (
        <div className="py-16 md:p-40">
            <h1 className="text-5xl text-center gilroy-bold mb-9">All Consultations</h1>
            <div className="flex items-center gap-5 flex-wrap">
                {consultations.slice().reverse().map((consultation, index) => (
                    <ConsultationCard key={index} consultation={consultation} />
                ))}
            </div>
        </div>
    )
};

export default Consultants;
