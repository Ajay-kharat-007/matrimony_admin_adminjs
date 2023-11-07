import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  middleName: string;
  lastName: string;
  fullName?: string;
  email?: string;
  phone?: string;
  image?: string;
}

const UsersSchema = new Schema<IUser>({
  firstName: { type: String, required: [true, "Please Enter First Name"] },
  middleName: { type: String, required: [true, "Please Enter Middle Name"] },
  lastName: { type: String, required: [true, "Please Enter Last Name"] },
  fullName: String,
  email: String,
  phone: String,
  image : String
})

export const MarriedUsersModel = model<IUser>("MarriedUsers", UsersSchema);