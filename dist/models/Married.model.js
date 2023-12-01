import { Schema, model } from "mongoose";
const UsersSchema = new Schema({
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
export const MarriedUsersModel = model("MarriedUsers", UsersSchema);
