import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    ConsultantId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    userMessage: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['requested', 'accepted', 'rejected', 'completed'],
        default: 'requested'
    }
}, { timestamps: true });

const Appointment = mongoose.model('appointments', appointmentSchema);

export default Appointment;