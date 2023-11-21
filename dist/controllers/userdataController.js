import asyncHandler from 'express-async-handler';
import { UsersModel } from '../models/User.model.js';
import mime from 'mime';
import multer from 'multer';
import imageModel from '../models/Image.model.js';
export const getContact = asyncHandler(async (req, res) => {
    try {
        const contacts = await UsersModel.find({ user_id: req.user.id });
        res.status(200).json({
            status: 200,
            data: contacts,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
});
export const getAllContact = asyncHandler(async (req, res) => {
    try {
        const { brideOrGroom, maritalStatus, quantity, userCode, startingAge, endingAge } = req.query;
        const filter = {};
        if (brideOrGroom) {
            filter.brideOrGroom = brideOrGroom;
        }
        if (userCode) {
            filter.userCode = userCode;
        }
        if (maritalStatus) {
            filter.maritalStatus = maritalStatus;
        }
        const contacts = await UsersModel.find(filter);
        if (startingAge && endingAge) {
            console.log(startingAge, endingAge);
            contacts.filter((elem) => {
                return elem.age >= startingAge && elem.age <= endingAge;
            });
        }
        if (quantity) {
            res.status(200).json({
                status: 200,
                data: contacts.slice(0, Number(quantity)),
            });
        }
        let contactArr = contacts.slice(0, 10);
        res.status(200).json({
            status: 200,
            data: contactArr,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
});
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage: Storage,
}).single('image');
export const createContact = asyncHandler(async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            const newImage = new UsersModel({
                ...req.body,
                listing: true,
                user_id: req.user.id,
            });
            newImage
                .save()
                .then(() => res.send('Successfully uploaded'))
                .catch((err) => {
                console.log(err);
            });
        }
    });
});
export const uploadImage = asyncHandler(async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            const contentType = mime.getType(req.file.filename);
            if (!contentType) {
                return res.status(400).json({ message: 'Invalid image format', status: 400 });
            }
            const newImage = new imageModel({
                user_id: req.user.id,
                image: {
                    data: req.file.filename,
                    contentType,
                },
                imagePath: req.file.filename,
            });
            newImage
                .save()
                .then(() => res.status(201).json({ message: 'Image uploaded successfully', status: 201 }))
                .catch((err) => {
                console.log(err);
                res.status(500).json({ message: 'Internal server error', status: 500 });
            });
        }
    });
});
export const getImage = asyncHandler(async (req, res) => {
    try {
        const contacts = await imageModel.find({ user_id: req.user.id });
        res.status(200).json({
            status: 200,
            data: contacts,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
});
export const updateContact = asyncHandler(async (req, res) => {
    const contact = await UsersModel.findById(req.user.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    const updatedContacts = await UsersModel.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedContacts);
});
export const deleteContact = asyncHandler(async (req, res) => {
    const contact = await UsersModel.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    await UsersModel.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json(contact);
});
export const getContactById = asyncHandler(async (req, res) => {
    const contact = await UsersModel.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json(contact);
});
