import asyncHandler from 'express-async-handler';
import { UserProfileModel } from '../models/Master.model.js';
export const getMaster = asyncHandler(async (req, res) => {
    try {
        const masterDropdown = await UserProfileModel.find({});
        res.status(200).json({
            status: true,
            data: masterDropdown,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
});
