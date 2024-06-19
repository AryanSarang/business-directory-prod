import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    consultantId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    consultantName: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    userMessage: {
        type: String
    },
    status: {
        type: String,
        enum: ['requested', 'accepted', 'rejected', 'completed'],
        default: 'requested'
    }
}, { timestamps: true });

const Appointment = mongoose.model('appointments', appointmentSchema);

export default Appointment;