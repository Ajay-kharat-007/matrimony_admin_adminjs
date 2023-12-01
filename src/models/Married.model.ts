// import { Schema, model, Document } from "mongoose";

// export interface IUser extends Document {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   fullName?: string;
//   imagePath?: string;
//   email?: string;
//   image?: string;
//   phone?: string;
//   password?: string;
//   status?: "active" | "inactive";
//   gender?: "male" | "female";
//   maritalStatus?: "Unmarried" | "Divorced" | "Widow/Widower";
//   dateOfBirth?: Date;
//   height?: string;
//   weight?: string;
//   age?: string;
//   bloodGroup?: string;
//   whatsappNumber?: string;
//   parentName?: string;
//   relationWithParent?: string;
//   parentOccupation?: string;
//   motherStatus?: "Alive" | "Passed Away";
//   fatherStatus?: "Alive" | "Passed Away";
//   brothersMarried?: string;
//   brothersUnmarried?: string;
//   sistersMarried?: string;
//   sistersUnmarried?: string;
//   totalSiblings?: string;
//   mothersMaternalSurname?: string;
//   mothersMaternalNativePlace?: string;
//   mothersMaternalPlaceDistrict?: string;
//   education?: "HSC" | "SSC" | "B.Tech";
//   otherEducationalDetails?: string;
//   jobOrOccupation?: "Not Currently Employed" | "Looking for a Job" | "Private Job" | "Business" | "Civil Service";
//   jobOccupationDetails?: string;
//   jobOccupationAddress?: string;
//   incomePerAnnum?: "Not Earning" | "Below 1.2 Lakh" | "1.2 to 5 Lakh" | "5 to 8 Lakh" | "8 to 10 Lakh" | "10 to 12 Lakh" | "12 to 15 Lakh" | "15 to 20 Lakh" | "Above 20 Lakh";
//   isPhysicallyChallenged?: "Yes" | "No";
//   physicallyChallengedDetails?: string;
//   physique?: "Slim" | "Average" | "Heavy";
//   specsOrContactLenses?: "No Specs" | "Wearing Glasses" | "Wearing Contact Lenses" | "Wearing Both Alternatively";
//   skinTone?: "Fair" | "Medium" | "Brown";
//   horoscopeMatching?: "Required" | "Not Required";
//   manglikAsPerHoroscope?: "Strong" | "Mild" | "Without Dosha" | "No";
//   gotra?: string;
//   kuladaivat?: string;
//   otherImportantDetails?: string;
//   country?: "India" | "Outside India";
//   countryNameIfOutsideIndia?: string;
//   address?: string;
//   locationCity?: string;
//   state?: string;
//   pincode?: string;
//   nativePlace?: string;
//   nativePlaceTaluka?: string;
//   nativePlaceDistrict?: string;
//   hasOtherOwnershipResidence?: "Yes" | "No";
//   addressOfOtherOwnershipResidence?: string;
//   closeRelativeName?: string;
//   closeRelativeAddress?: string;
//   closeRelativeContactDetails?: string;
//   isSubCastePreferred?: "Yes" | "No";
//   isPartnerOutsideMumbaiPreferred?: "Yes" | "No";
//   otherExpectationsFromPartner?: string;
//   paymentStatus?: "Pending" | "Successfull";
//   subscription?: "1" | "2";
//   subscriptionStartDate?: Date;
//   subscriptionEndDate?: Date;
//   role?: "admin" | "user";
// }

// const UsersSchema = new Schema<IUser>({
//   firstName: { type: String },
//   middleName: { type: String },
//   lastName: { type: String },
//   fullName: String,
//   imagePath: String,
//   email: String,
//   phone: String,
//   image: String,
//   password: String,
//   status: { type: String, enum: ["active", "inactive"] },
//   gender: { type: String, enum: ["male", "female"] },
//   maritalStatus: { type: String, enum: ["Unmarried", "Divorced", "Widow/Widower"] },
//   dateOfBirth: Date,
//   height: String,
//   age: String,
//   weight: String,
//   bloodGroup: String,
//   whatsappNumber: String,
//   parentName: String,
//   relationWithParent: String,
//   parentOccupation: String,
//   motherStatus: { type: String, enum: ["Alive", "Passed Away"] },
//   fatherStatus: { type: String, enum: ["Alive", "Passed Away"] },
//   brothersMarried: String,
//   brothersUnmarried: String,
//   sistersMarried: String,
//   sistersUnmarried: String,
//   totalSiblings: String,
//   mothersMaternalSurname: String,
//   mothersMaternalNativePlace: String,
//   mothersMaternalPlaceDistrict: String,
//   education: { type: String, enum: ["HSC", "SSC", "B.Tech"] },
//   otherEducationalDetails: String,
//   jobOrOccupation: {
//     type: String,
//     enum: [
//       "Not Currently Employed",
//       "Looking for a Job",
//       "Private Job",
//       "Business",
//       "Civil Service",
//     ],
//   },
//   jobOccupationDetails: String,
//   jobOccupationAddress: String,
//   incomePerAnnum: {
//     type: String,
//     enum: [
//       "Not Earning",
//       "Below 1.2 Lakh",
//       "1.2 to 5 Lakh",
//       "5 to 8 Lakh",
//       "8 to 10 Lakh",
//       "10 to 12 Lakh",
//       "12 to 15 Lakh",
//       "15 to 20 Lakh",
//       "Above 20 Lakh",
//     ],
//   },
//   isPhysicallyChallenged: { type: String, enum: ["Yes", "No"] },
//   physicallyChallengedDetails: String,
//   physique: { type: String, enum: ["Slim", "Average", "Heavy"] },
//   specsOrContactLenses: {
//     type: String,
//     enum: ["No Specs", "Wearing Glasses", "Wearing Contact Lenses", "Wearing Both Alternatively"],
//   },
//   skinTone: { type: String, enum: ["Fair", "Medium", "Brown"] },
//   horoscopeMatching: { type: String, enum: ["Required", "Not Required"] },
//   manglikAsPerHoroscope: { type: String, enum: ["Strong", "Mild", "Without Dosha", "No"] },
//   gotra: String,
//   kuladaivat: String,
//   otherImportantDetails: String,
//   country: { type: String, enum: ["India", "Outside India"] },
//   countryNameIfOutsideIndia: String,
//   address: String,
//   locationCity: String,
//   state: String,
//   pincode: String,
//   nativePlace: String,
//   nativePlaceTaluka: String,
//   nativePlaceDistrict: String,
//   hasOtherOwnershipResidence: { type: String, enum: ["Yes", "No"] },
//   addressOfOtherOwnershipResidence: String,
//   closeRelativeName: String,
//   closeRelativeAddress: String,
//   closeRelativeContactDetails: String,
//   isSubCastePreferred: { type: String, enum: ["Yes", "No"] },
//   isPartnerOutsideMumbaiPreferred: { type: String, enum: ["Yes", "No"] },
//   otherExpectationsFromPartner: String,
//   paymentStatus: { type: String, enum: ["Pending", "Successfull"] },
//   subscription: { type: String, enum: ["1", "2"] },
//   subscriptionStartDate: Date,
//   subscriptionEndDate: Date,
//   role: { type: String, enum: ['admin', 'user'] }
// })

// export const MarriedUsersModel = model<IUser>("MarriedUsers", UsersSchema);

import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  middleName: string;
  lastName: string;
  fullName?: string;
  imagePath?: string;
  email?: string;
  image?: string;
  phone?: string;
  password?: string;
  status?: string; // "active" | "inactive" removed
  gender?: string; // "male" | "female" removed
  maritalStatus?: string; // "Unmarried" | "Divorced" | "Widow/Widower" | "Married" removed
  dateOfBirth?: Date;
  height?: string;
  weight?: string;
  age?: string;
  bloodGroup?: string;
  whatsappNumber?: string;
  parentName?: string;
  relationWithParent?: string;
  parentOccupation?: string;
  motherStatus?: string; // "Alive" | "Passed Away" removed
  fatherStatus?: string; // "Alive" | "Passed Away" removed
  brothersMarried?: string;
  brothersUnmarried?: string;
  sistersMarried?: string;
  sistersUnmarried?: string;
  totalSiblings?: string;
  mothersMaternalSurname?: string;
  mothersMaternalNativePlace?: string;
  mothersMaternalPlaceDistrict?: string;
  education?: string; // "HSC" | "SSC" | "B.Tech" | "BSc" | "PHD" removed
  otherEducationalDetails?: string;
  jobOrOccupation?: string; // "Not Currently Employed" | "Looking for a Job" | "Private Job" | "Business" | "Civil Service" removed
  jobOccupationDetails?: string;
  jobOccupationAddress?: string;
  incomePerAnnum?: string; // "Not Earning" | "Below 1.2 Lakh" | "1.2 to 5 Lakh" | "5 to 8 Lakh" | "8 to 10 Lakh" | "10 to 12 Lakh" | "12 to 15 Lakh" | "15 to 20 Lakh" | "Above 20 Lakh" removed
  isPhysicallyChallenged?: string; // "Yes" | "No" removed
  physicallyChallengedDetails?: string;
  physique?: string; // "Slim" | "Average" | "Heavy" removed
  specsOrContactLenses?: string; // "No Specs" | "Wearing Glasses" | "Wearing Contact Lenses" | "Wearing Both Alternatively" removed
  skinTone?: string; // "Fair" | "Medium" | "Brown" removed
  horoscopeMatching?: string; // "Required" | "Not Required" removed
  manglikAsPerHoroscope?: string; // "Strong" | "Mild" | "Without Dosha" | "No" removed
  gotra?: string;
  kuladaivat?: string;
  otherImportantDetails?: string;
  country?: string; // "India" | "Outside India" removed
  countryNameIfOutsideIndia?: string;
  address?: string;
  locationCity?: string;
  state?: string;
  pincode?: string;
  nativePlace?: string;
  nativePlaceTaluka?: string;
  nativePlaceDistrict?: string;
  hasOtherOwnershipResidence?: string; // "Yes" | "No" removed
  addressOfOtherOwnershipResidence?: string;
  closeRelativeName?: string;
  closeRelativeAddress?: string;
  closeRelativeContactDetails?: string;
  isSubCastePreferred?: string; // "Yes" | "No" removed
  isPartnerOutsideMumbaiPreferred?: string; // "Yes" | "No" removed
  otherExpectationsFromPartner?: string;
  paymentStatus?: string; // "Pending" | "Successfull" removed
  subscription?: string; // "1" | "2" removed
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
  role?: string; // 'admin' | 'user' removed
}

const UsersSchema = new Schema<IUser>({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  fullName: String,
  imagePath: String,
  email: String,
  phone: String,
  image: String,
  password: String,
  status: String,
  gender: String,
  maritalStatus: String,
  dateOfBirth: Date,
  height: String,
  age: String,
  weight: String,
  bloodGroup: String,
  whatsappNumber: String,
  parentName: String,
  relationWithParent: String,
  parentOccupation: String,
  motherStatus: String,
  fatherStatus: String,
  brothersMarried: String,
  brothersUnmarried: String,
  sistersMarried: String,
  sistersUnmarried: String,
  totalSiblings: String,
  mothersMaternalSurname: String,
  mothersMaternalNativePlace: String,
  mothersMaternalPlaceDistrict: String,
  education: String,
  otherEducationalDetails: String,
  jobOrOccupation: String,
  jobOccupationDetails: String,
  jobOccupationAddress: String,
  incomePerAnnum: String,
  isPhysicallyChallenged: String,
  physicallyChallengedDetails: String,
  physique: String,
  specsOrContactLenses: String,
  skinTone: String,
  horoscopeMatching: String,
  manglikAsPerHoroscope: String,
  gotra: String,
  kuladaivat: String,
  otherImportantDetails: String,
  country: String,
  countryNameIfOutsideIndia: String,
  address: String,
  locationCity: String,
  state: String,
  pincode: String,
  nativePlace: String,
  nativePlaceTaluka: String,
  nativePlaceDistrict: String,
  hasOtherOwnershipResidence: String,
  addressOfOtherOwnershipResidence: String,
  closeRelativeName: String,
  closeRelativeAddress: String,
  closeRelativeContactDetails: String,
  isSubCastePreferred: String,
  isPartnerOutsideMumbaiPreferred: String,
  otherExpectationsFromPartner: String,
  paymentStatus: String,
  subscription: String,
  subscriptionStartDate: Date,
  subscriptionEndDate: Date,
  role: String,
});

export const MarriedUsersModel = model<IUser>("MarriedUsers", UsersSchema);