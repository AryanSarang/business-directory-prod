import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../../redux/user/userSlice";
import ConsultantCard from "./ConsultantCard";

const Consultants = () => {
    const [consultants, setConsultants] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearError());
        const getConsultants = async () => {
            try {
                const token = localStorage.getItem("access_token");

                const res = await fetch("/api/admin/getAllConsultants", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await res.json();
                console.log(data);
                if (data.success) {
                    setConsultants(data.data);
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
        <div className="py-16 md:p-40">
            <h1 className="text-5xl text-center gilroy-bold mb-9">Consultants List</h1>
            <div className="flex items-center gap-5 flex-wrap">
                {consultants.map((consultant, index) => (
                    <ConsultantCard key={index} consultant={consultant} />
                ))}
            </div>
        </div>
    )
};

export default Consultants;
