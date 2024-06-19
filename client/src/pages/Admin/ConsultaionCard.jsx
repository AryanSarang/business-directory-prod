
import moment from 'moment';

const ConsultationCard = ({ consultation }) => {

    const getStatusClasses = (status) => {
        switch (status) {
            case 'requested':
                return 'bg-yellow-200 text-yellow-800';
            case 'accepted':
                return 'bg-green-200 text-green-800';
            case 'rejected':
                return 'bg-red-200 text-red-800';
            case 'completed':
                return 'bg-blue-200 text-blue-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    return (
        <div className="bg-white px-6 py-4 shadow-lg rounded-lg hover:bg-gray-100 transition duration-300 relative w-full my-4">
            <a href="/admin/consultants">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{consultation.consultantName}</h3>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Specialization:</span> {consultation.specialization}</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">User:</span> {consultation.userName}</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Phone:</span> {consultation.userPhone}</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Message:</span> {consultation.userMessage}</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Status:</span> <span className={`px-2 py-1 rounded ${getStatusClasses(consultation.status)}`}>
                            {consultation.status}
                        </span></p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Appointment Date:</span> {moment(consultation.appointmentDate).format('MMMM Do YYYY, h:mm a')}</p>
                    </div>
                    <span className="text-gray-500 text-xs absolute top-1 right-1 mt-1 mr-1">
                        {moment(consultation.createdAt).fromNow()}
                    </span>
                </div>
            </a>
        </div>
    )
};

export default ConsultationCard;
