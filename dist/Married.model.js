import { Schema, model } from "mongoose";
const UsersSchema = new Schema({
    firstName: { type: String, required: [true, "Please Enter First Name"] },
    middleName: { type: String, required: [true, "Please Enter Middle Name"] },
    lastName: { type: String, required: [true, "Please Enter Last Name"] },
    fullName: String,
    age: String,
    gender: String,
    email: String,
    phone: String,
    image: String,
    role: String
});
export const MarriedUsersModel = model("MarriedUsers", UsersSchema);
