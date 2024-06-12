import User from "../Models/User.model.js";
import Consultant from '../Models/Consultant.model.js';


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