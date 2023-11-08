import { Schema, model } from "mongoose";
const UsersSchema = new Schema({
    firstName: { type: String, required: [true, "Please Enter First Name"] },
    middleName: { type: String, required: [true, "Please Enter Middle Name"] },
    lastName: { type: String, required: [true, "Please Enter Last Name"] },
    fullName: String,
    age: String,
    gender: { type: String, enum: ['male', 'female'] },
    email: String,
    height: String,
    phone: String,
    image: String,
    password: String,
    role: { type: String, enum: ['admin', 'user'] }
});
export const InactiveUsersModel = model("InactiveUsers", UsersSchema);
