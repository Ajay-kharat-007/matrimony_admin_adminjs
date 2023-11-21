import { Request, Response } from 'express';
import csv from 'csvtojson';
import { UsersModel } from '../models/User.model.js';

export const importUser = async (req: Request, res: Response) => {
    try {
        const userData: any[] = [];
        csv()
            .fromFile(req.file.path)
            .then(async (result) => {
                for (let i = 0; i < result.length; i++) {
                    userData.push({ ...result[i], userCode: i, role: 'user' });
                }

                await UsersModel.insertMany(userData);
            });
        res.send({ success: true, status: 201, msg: 'csv successfully imported' });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};