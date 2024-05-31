import { useSelector } from 'react-redux';
import { FaPen } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(currentUser.username);
    const [newAvatar, setNewAvatar] = useState(currentUser.avatar);
    const [file, setFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewAvatar(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        maxFiles: 1,
    });

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        updateUser({ username: newUsername, avatar: newAvatar });
        setIsEditing(false);
    };

    return (
        <main className="w-10/12 my-16 mx-auto">
            <div className="upper flex justify-between">
                <div className="listing w-4/12">Listing</div>
                <div className="consult w-4/12">Consultancy</div>
                <div className="profile w-4/12 bg-white p-11 rounded-lg flex flex-col gap-4 text-center">
                    <span className="ms-auto"><button className='flex items-center gap-1' onClick={handleEditClick}>
                        <FaPen fontSize="12px" /> Edit
                    </button></span>
                    <img src={newAvatar} alt="profile" className="w-32 h-32 object-cover self-center rounded-full" />
                    <div className="flex flex-col ">
                        {isEditing ? (
                            <form className='flex flex-col'>
                                <div className='flex justify-between'>
                                    <span>Username: </span>
                                    <input
                                        type="text"
                                        value={newUsername}
                                        onChange={(e) => setNewUsername(e.target.value)}
                                        className="input-field self-start w-60 px-2 py-1 rounded-md"
                                        placeholder="New Username"
                                    />
                                </div>
                                <div className="flex mt-3 align-middle items-center justify-between">
                                    <span>Image:</span>
                                    <label
                                        {...getRootProps({
                                            className:
                                                'flex flex-col items-center justify-center w-60 h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100',
                                        })}
                                        htmlFor="dropzone-file"
                                    >
                                        <div className="flex items-center justify-center pt-2 pb-2">
                                            <svg
                                                className="w-6 h-6 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <span>
                                                <p className="mb-2 text-sm text-gray-500">
                                                    <span className="font-semibold">Select image</span>
                                                </p>
                                                <p className="mb-2 text-sm text-gray-500">or drag and drop</p>
                                            </span>
                                        </div>
                                        <input id="dropzone-file" type="file" {...getInputProps()} className="hidden" />
                                    </label>

                                </div>
                                <button onClick={handleSave} className="mt-5 ml-auto text-white save-button self-start border-solid border-2 rounded-md  bg-slate-700 px-2 py-1 ">
                                    Update
                                </button>
                            </form>
                        ) : (
                            <>
                                <span className="self-start px-2 py-1">Username: @{currentUser.username}</span>
                                <span className="self-start px-2 py-1">Email: {currentUser.email}</span>
                                <span className='mt-4 font-medium text-red-700 p-1 px-2 border-2 hover:text-red-400 hover:border-red-400  border-red-500  rounded-md cursor-pointer self-start'>Log out</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="review lower">Review</div>
        </main>
    );
};

export default Profile;
