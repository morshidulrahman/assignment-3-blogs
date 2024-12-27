import { model, Schema } from 'mongoose';
import { Tblog } from './blogs.interface';

const BlogSchema = new Schema<Tblog>(
  {
    title: { type: String },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

BlogSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  },
});

export const BlogModel = model<Tblog>('Blogs', BlogSchema);
