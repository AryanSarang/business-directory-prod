import User from "../Models/User.model.js";
import Consultant from '../Models/Consultant.model.js';
import Appointment from "../Models/Appointments.model.js";
import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


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
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Consultant application verification result',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <div style="background-color: #f7f7f7; padding: 10px 20px; text-align: center;">
                        <img src="https://scontent.fjai2-4.fna.fbcdn.net/v/t39.30808-6/326199203_853842605872148_2610728013556829022_n.png?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=36QVIa-pDYIQ7kNvgE0NulF&_nc_ht=scontent.fjai2-4.fna&oh=00_AYDTzG_Up7HcgSrGJPiawTrv3HUpmWfl2Q70Rfq_tVE6hA&oe=6680292C"
                        alt="Company Logo" style="max-width: 150px; height: auto;">
                    </div>
                    <div style="padding: 20px;">
                        <p>Hi ${user.name},</p>
                        <p>Your request for becoming a consultant has been ${approved}</p>
                        <br>
                        <p>Best regards,<br>Your Company</p>
                    </div>
                    <div style="background-color: #f7f7f7; padding: 10px 20px; text-align: center;">
                        <p style="font-size: 12px; color: #777;">&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            `
        };
        await transporter.sendMail(mailOptions);
        res.status(201).send({
            success: true,
            message: 'Account status updated',
            data: consultant
        });
    } catch (error) {
        next(error);
    }
}