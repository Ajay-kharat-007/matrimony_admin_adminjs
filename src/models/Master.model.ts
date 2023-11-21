import { Schema, model, Document } from 'mongoose';

// Define the document interface
export interface UserProfile extends Document {
  maharashtra_cities: string[];
  horoscope: string[];
  maritalStatus: string[];
  salaryAnnum: string[];
  skin: string[];
  country: string[];
  manglik: string[];
  specs: string[];
  physique: string[];
}

// Define the schema
const userProfileSchema = new Schema<UserProfile>({
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

// Create and export the model
export const UserProfileModel = model<UserProfile>('masters_dropdown', userProfileSchema);
