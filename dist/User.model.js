import { Schema, model } from "mongoose";
const UsersSchema = new Schema({
    firstName: { type: String, required: [true, "Please Enter First Name"] },
    middleName: { type: String, required: [true, "Please Enter Middle Name"] },
    lastName: { type: String, required: [true, "Please Enter Last Name"] },
    fullName: String,
    age: String,
    gender: { type: String, enum: ['male', 'female'] },
    status: { type: String, enum: ['active', 'inactive'] },
    email: String,
    height: String,
    phone: String,
    image: String,
    password: String,
    role: { type: String, enum: ['admin', 'user'] }
});
export const UsersModel = model("Users", UsersSchema);
