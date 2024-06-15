import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../redux/user/userSlice";
import { useParams } from 'react-router-dom';

const Consultant = () => {
    const dispatch = useDispatch();
    const [consultant, setConsultant] = useState([]);
    const { consultantId } = useParams();

    useEffect(() => {
        dispatch(clearError());
        const getConsultant = async () => {
            try {
                const res = await fetch("/api/auth/getConsultantById", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ consultantId }),
                });
                const data = await res.json();
                console.log(data);
                if (data.success) {
                    setConsultant(data);
                } else {
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getConsultant();
    }, []);
    return (
        <main>
            Consultant
        </main>
    )
};

export default Consultant;
