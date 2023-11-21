import asyncHandler from 'express-async-handler';
import { UsersModel } from '../models/User.model.js';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    try {
        const { firstName, lastName, phone, email, password, paymentStatus, subscription, } = req.body;
        if (!firstName ||
            !lastName ||
            !phone ||
            !email ||
            !password ||
            !paymentStatus ||
            !subscription) {
            res.status(400);
            throw new Error("All fields are mandatory!");
        }
        const existingUser = await UsersModel.findOne({ email: email });
        if (existingUser) {
            res.status(400);
            throw new Error("User already registered!!");
        }
        const contacts = await UsersModel.find({});
        const user = await UsersModel.create({
            firstName,
            lastName,
            phone,
            fullName: firstName + " " + lastName,
            email,
            password,
            status: "active",
            listing: false,
            userCode: 2300 + contacts.length + 1,
            paymentStatus,
            subscription,
            subscriptionStartDate: new Date(),
            subscriptionEndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        });
        if (user) {
            res.status(201).json({
                _id: user.id,
                email: user.email,
                userCode: 2300 + contacts.length + 1,
            });
        }
        else {
            res.status(400);
            throw new Error("User data is not valid");
        }
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await UsersModel.findOne({ email });
    const userPassword = user.password == password;
    if (user.subscriptionEndDate < new Date()) {
        res.status(400);
        throw new Error("Subscription Expired");
    }
    if (user && userPassword && user.status == "active") {
        const accessToken = jwt.sign({
            user: {
                username: user.firstName + user.lastName,
                email: user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : 'Ajay123', { expiresIn: "45m" });
        res.status(200).json({ accessToken });
    }
    else {
        res.status(401);
        throw new Error("Email or Password is not valid or Active");
    }
});
export const current = asyncHandler(async (req, res) => {
    const contacts = await UsersModel.findOne({ email: req.user.email });
    res.json(contacts);
});
