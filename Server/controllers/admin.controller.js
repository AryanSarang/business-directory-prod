import User from "../Models/User.model.js";
import Consultant from '../Models/Consultant.model.js';
import Appointment from "../Models/Appointments.model.js";


export const getAllUsersController = async (req, res, next) => {
    try {
        const users = await User.find({}).select('-password');;
        res.status(200).send({
            success: true,
            message: 'users list',
            data: users,
        })
    } catch (error) {
        next(error);
    }

}

export const getAllConsultantsController = async (req, res, next) => {
    try {
        const consultants = await Consultant.find({});
        res.status(200).send({
            success: true,
            message: 'consultants list',
            data: consultants
        })
    } catch (error) {
        next(error);
    }

}

export const getAllConsultations = async (req, res, next) => {
    try {
        const consultations = await Appointment.find({});
        res.status(200).send({
            success: true,
            message: 'Consultations list',
            data: consultations
        })
    } catch (error) {
        next(error);
    }
}

export const consultantApprove = async (req, res, next) => {
    try {
        const { consultantId, approved } = req.body;
        const consultant = await Consultant.findByIdAndUpdate(
            consultantId,
            { approved },
            { new: true }
        );

        const user = await User.findOne({ _id: consultant.userId });
        const notification = user.notification;
        notification.push({
            type: 'consultant request update',
            message: `Your request for joining as a consultant has been ${approved === "approved" ? "approved" : "denied, feel free to contact us if you think we made a mistake."}`,
            timestamp: new Date()
        });
        user.isConsultant = approved === "approved";
        await user.save();

        res.status(201).send({
            success: true,
            message: 'Account status updated',
            data: consultant
        });
    } catch (error) {
        next(error);
    }
}