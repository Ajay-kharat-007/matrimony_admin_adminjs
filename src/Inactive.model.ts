import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  middleName: string;
  lastName: string;
  fullName?: string;
  age?: string;
  gender?: "male" | "female";
  email?: string;
  height?: string;
  phone?: string;
  image?: string;
  password?: string;
  role?:  "admin" | "user";
}

const UsersSchema = new Schema<IUser>({
  firstName: { type: String, required: [true, "Please Enter First Name"] },
  middleName: { type: String, required: [true, "Please Enter Middle Name"] },
  lastName: { type: String, required: [true, "Please Enter Last Name"] },
  fullName: String,
  age: String,
  gender: {type : String, enum : ['male', 'female']},
  email: String,
  height: String,
  phone: String,
  image: String,
  password: String,
  role: {type : String, enum : ['admin', 'user']}
})

export const InactiveUsersModel = model<IUser>("InactiveUsers", UsersSchema);