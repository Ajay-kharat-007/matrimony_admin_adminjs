import { Schema, model } from "mongoose";
const UsersSchema = new Schema({
    firstName: { type: String, required: [true, "Please Enter First Name"] },
    middleName: { type: String, required: [true, "Please Enter Middle Name"] },
    lastName: { type: String, required: [true, "Please Enter Last Name"] },
    fullName: String,
    email: String,
    phone: String,
    password: String,
    status: { type: String, enum: ["Active", "Inactive"] },
    gender: { type: String, enum: ["Male", "Female"] },
    maritalStatus: { type: String, enum: ["Unmarried", "Divorced", "Widow/Widower"] },
    dateOfBirth: Date,
    height: String,
    weight: String,
    bloodGroup: String,
    whatsappNumber: String,
    parentName: String,
    relationWithParent: String,
    parentOccupation: String,
    motherStatus: { type: String, enum: ["Alive", "Passed Away"] },
    fatherStatus: { type: String, enum: ["Alive", "Passed Away"] },
    brothersMarried: String,
    brothersUnmarried: String,
    sistersMarried: String,
    sistersUnmarried: String,
    totalSiblings: String,
    mothersMaternalSurname: String,
    mothersMaternalNativePlace: String,
    mothersMaternalPlaceDistrict: String,
    education: { type: String, enum: ["HSC", "SSC", "B.Tech"] },
    otherEducationalDetails: String,
    jobOrOccupation: {
        type: String,
        enum: [
            "Not Currently Employed",
            "Looking for a Job",
            "Private Job",
            "Business",
            "Civil Service",
        ],
    },
    jobOccupationDetails: String,
    jobOccupationAddress: String,
    incomePerAnnum: {
        type: String,
        enum: [
            "Not Earning",
            "Below 1.2 Lakh",
            "1.2 to 5 Lakh",
            "5 to 8 Lakh",
            "8 to 10 Lakh",
            "10 to 12 Lakh",
            "12 to 15 Lakh",
            "15 to 20 Lakh",
            "Above 20 Lakh",
        ],
    },
    isPhysicallyChallenged: { type: String, enum: ["Yes", "No"] },
    physicallyChallengedDetails: String,
    physique: { type: String, enum: ["Slim", "Average", "Heavy"] },
    specsOrContactLenses: {
        type: String,
        enum: ["No Specs", "Wearing Glasses", "Wearing Contact Lenses", "Wearing Both Alternatively"],
    },
    skinTone: { type: String, enum: ["Fair", "Medium", "Brown"] },
    horoscopeMatching: { type: String, enum: ["Required", "Not Required"] },
    manglikAsPerHoroscope: { type: String, enum: ["Strong", "Mild", "Without Dosha", "No"] },
    gotra: String,
    kuladaivat: String,
    otherImportantDetails: String,
    country: { type: String, enum: ["India", "Outside India"] },
    countryNameIfOutsideIndia: String,
    address: String,
    locationCity: String,
    state: String,
    pincode: String,
    nativePlace: String,
    nativePlaceTaluka: String,
    nativePlaceDistrict: String,
    hasOtherOwnershipResidence: { type: String, enum: ["Yes", "No"] },
    addressOfOtherOwnershipResidence: String,
    closeRelativeName: String,
    closeRelativeAddress: String,
    closeRelativeContactDetails: String,
    isSubCastePreferred: { type: String, enum: ["Yes", "No"] },
    isPartnerOutsideMumbaiPreferred: { type: String, enum: ["Yes", "No"] },
    otherExpectationsFromPartner: String,
    paymentStatus: { type: String, enum: ["Pending", "Successfull"] },
    subscriptionStartDate: Date,
    subscriptionEndDate: Date,
    role: String,
});
export const UsersModel = model("Users", UsersSchema);
