import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  middleName: string;
  lastName: string;
  fullName?: string;
  age?: string;
  gender?: string;
  email?: string;
  phone?: string;
  image?: string;
  role?: string;
}

const UsersSchema = new Schema<IUser>({
  firstName: { type: String, required: [true, "Please Enter First Name"] },
  middleName: { type: String, required: [true, "Please Enter Middle Name"] },
  lastName: { type: String, required: [true, "Please Enter Last Name"] },
  fullName: String,
  age: String,
  gender: String,
  email: String,
  phone: String,
  image: String,
  role : String
})

export const MarriedUsersModel = model<IUser>("MarriedUsers", UsersSchema);