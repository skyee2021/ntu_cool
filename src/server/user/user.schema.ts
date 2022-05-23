// user.schema.ts
import { Schema } from 'mongoose';

export const userSchema = new Schema({
  _id: { type: String, required: true }, // 覆蓋 Mongoose 生成的默認 _id
  user_name: { type: String, required: true },
  user_email: { type: String, required: true }
});