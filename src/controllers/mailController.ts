import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import { Request, Response } from 'express';

export const sendMail = asyncHandler(async (req: Request, res: Response) => {
    try {
        let testAccount = await nodemailer.createTestAccount();
        let transporter = await nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "yessenia85@ethereal.email",
                pass: "AW6de9MR1Rs6VqYnRY"
            },
        });

        let info = await transporter.sendMail({
            from: '"Ajay Kharat" <Ajay@gmail.com>',
            to: req.query.email as string,
            subject: "sending mail through node server api",
            text: `your email address ${req.query.email} and password ${req.query.password}`,
            html: `<b>your email address ${req.query.email} and password ${req.query.password}</b>`
        });
        res.json(info);
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
});