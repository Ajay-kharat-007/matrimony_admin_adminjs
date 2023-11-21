import mongoose, { Document, Schema } from 'mongoose';

interface Image extends Document {
  user_id: mongoose.Types.ObjectId;
  image: {
    data: Buffer;
    contentType: string;
  };
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
}

const imageSchema = new Schema<Image>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Assuming 'User' is the name of the referenced model
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    imagePath: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Image>('Image', imageSchema);
