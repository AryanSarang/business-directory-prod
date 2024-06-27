import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log('Could not sign in with google', error);
        }
    }
    return (
        <button onClick={handleGoogleClick} type="button"
            className="bg-white text-slate-600 py-2 px-3 border-2 border-slate-600
           rounded-lg hover:opacity-95 hover:text-slate-500 disabled:opacity-95 flex gap-5 items-center justify-center">
            <FcGoogle fontSize="30px" /> Continue with Google
        </button>
    )
};
export default OAuth;
