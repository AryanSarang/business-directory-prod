
import { useSelector } from 'react-redux';
import { FaPen } from 'react-icons/fa';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ImageUpload from '../components/ImageUpload';


const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [droping, setDroping] = useState(false);
    const [newUsername, setNewUsername] = useState(currentUser.username);
    const [newAvatar, setNewAvatar] = useState(currentUser.avatar);
    const [file, setFile] = useState(undefined);
    console.log(file);
    const onDrop = (acceptedFiles) => {
        setDroping(true);
        const file = acceptedFiles[0];
        setFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewAvatar(reader.result);
        };
        reader.readAsDataURL(file);
        setDroping(false);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/jpg': []
        }
    });

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Updating user with:', { username: newUsername, avatar: newAvatar });
        setIsEditing(false);
    };

    return (

        <div className="profile w-full md:w-4/12 shadow-md bg-custom-white md:p-11 p-5 rounded-lg flex flex-col gap-4 text-center">
            <span className="ms-auto">
                <button className="flex items-center gap-1  font-semibold" onClick={handleEditClick}>
                    {isEditing ? "Discard" : <> <FaPen fontSize="12px" /> Edit</>}
                </button>
            </span>
            <img src={isEditing ? newAvatar : currentUser.avatar} alt="profile" className="w-32 h-32 object-cover self-center rounded-full" />
            <div className="flex flex-col">
                {isEditing ? (
                    <form className="flex flex-col" onSubmit={handleSave}>
                        <div className="flex justify-between items-center mb-3">
                            <span className='font-semibold'>Username: </span>
                            <input
                                type="text"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                                className="input-field self-start w-56 px-0 py-1 ps-2 rounded-md"
                                placeholder="New Username"
                            />
                        </div>
                        <div className="flex mt-3 align-middle items-center justify-between">
                            <span className='font-semibold'>Image:</span>
                            <div
                                {...getRootProps({
                                    className:
                                        'dropzone flex flex-col items-center justify-center w-56 h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100',
                                })}
                            >
                                <input {...getInputProps()} />
                                <ImageUpload />
                            </div>
                        </div>
                        {file && (<p className='text-green-500'>Image uploaded</p>)}
                        <button type="submit" className="mt-5 ml-auto text-white save-button self-start border-solid border-2 rounded-md bg-slate-700 px-2 py-1">
                            Update
                        </button>
                    </form>
                ) : (
                    <>

                        <span className="self-start px-1 py-1 font-semibold">Username: @{currentUser.username}</span>
                        <span className="self-start px-1 py-1 text-nowrap  font-semibold">Email: {currentUser.email}</span>

                        <span className="mt-4 font-medium text-red-700 p-1 px-2 border-2 hover:text-red-400 hover:border-red-400 border-red-500 rounded-md cursor-pointer self-end">
                            Log out
                        </span>
                    </>
                )}
            </div>
        </div>

    );
};

export default Profile;
