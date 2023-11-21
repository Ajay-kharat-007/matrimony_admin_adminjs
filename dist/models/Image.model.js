import mongoose, { Schema } from 'mongoose';
const imageSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    imagePath: {
        type: String,
    },
}, {
    timestamps: true,
});
export default mongoose.model('Image', imageSchema);
