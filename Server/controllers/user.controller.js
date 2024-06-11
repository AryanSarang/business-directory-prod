import User from "../Models/User.model.js";
import { errorHandler } from "../Utils/error.js";
import bcryptjs from 'bcryptjs';
import Consultant from '../Models/Consultant.model.js';

export const test = (req, res) => {
    res.json({
        message: "API route is working",
    });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
        return next(errorHandler(401, 'Unauthorized'));
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    password: req.body.password,
                    avatar: req.body.avatar,
                },
            },
            { new: true }
        );

        const { password, ...rest } = updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const applyConsultant = async (req, res, next) => {
    try {
        const newConsultant = await Consultant({ ...req.body, status: 'pending' })
        await newConsultant.save()
        const adminUser = await User.findOne({ isAdmin: true })
        const notification = adminUser.notification
        notification.push({
            type: 'apply-consultant',
            message: `${newConsultant.name} has applied to become a consultant`,
            data: {
                consultantId: newConsultant._id,
                name: newConsultant.name,
                onClickPath: '/admin/consultants'
            }
        })
        await User.findByIdAndUpdate(adminUser._id, { notification });

        res.status(201).send({
            success: true,
            message: 'Consultant details will be reviewed'
        });
    } catch (error) {
        next(error);
    }
};