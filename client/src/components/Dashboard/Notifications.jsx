import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CardNotification from './CardNotification';
import { notificationFailure, notificationStart, notificationSuccess } from '../../redux/user/userSlice';

const Notifications = () => {
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {

        const getAllNotifications = async () => {

            try {
                dispatch(notificationStart());
                const res = await fetch(`/api/user/get-all-notification`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: currentUser._id }),
                });
                const data = await res.json();
                if (data.success === false) {
                    dispatch(notificationFailure(data.message));
                    return;
                }
                dispatch(notificationSuccess(data.data));

            } catch (error) {
                dispatch(notificationFailure(error.message));
            }
        }
        getAllNotifications();
    }, []);
    return (
        <div className=' w-full md:w-4/12 shadow-md bg-custom-white md:px-11 md:py-3 p-5 rounded-lg  text-center'>

            <div className="w-full flex flex-col gap-4">
                <h4 className='text-2xl gilroy-bold mb-3 tracking-wide'>Notifications</h4>
                <div className="w-full flex flex-col gap-6 overflow-scroll overflow-x-hidden  bg-gray-200 notifications">
                    {currentUser && currentUser.notification && currentUser.notification.length > 0 ?
                        (
                            currentUser.notification.slice().reverse().map((notificationMsg, index) => (
                                <CardNotification key={index}
                                    message={notificationMsg.message}
                                    onClickPath={notificationMsg.data ? notificationMsg.data.onClickPath : undefined}
                                    timeStamp={notificationMsg.timestamp}
                                />
                            ))
                        ) : (<p className='text-slate-800 m-auto text-xl'>No notifications</p>)}

                </div>
            </div>

        </div>
    )
};

export default Notifications;
