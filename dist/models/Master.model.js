import { Schema, model } from 'mongoose';
const userProfileSchema = new Schema({
    maharashtra_cities: { type: [String], required: true },
    horoscope: { type: [String], required: true },
    maritalStatus: { type: [String], required: true },
    salaryAnnum: { type: [String], required: true },
    skin: { type: [String], required: true },
    country: { type: [String], required: true },
    manglik: { type: [String], required: true },
    specs: { type: [String], required: true },
    physique: { type: [String], required: true },
});
export const UserProfileModel = model('masters_dropdown', userProfileSchema);
