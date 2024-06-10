import mongoose from 'mongoose';


const consultantSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: [true, 'phone no. is required']
    },
    specialization: {
        type: String,
        required: [true, 'Specialization is required']
    },
    experience: {
        type: String,
        requied: [true, 'Experience is required']
    },
    feesPerConsultation: {
        type: Number,
        required: [true, 'feesPerConsultation is required']
    }
}, { timestamps: true });

const ConsultantModel = mongoose.model('Consultant', consultantSchema);

export default ConsultantModel;
