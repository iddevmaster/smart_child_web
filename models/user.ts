// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  prefix: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: 'teacher' | 'admin';
  schoolId: mongoose.Types.ObjectId;
  status?: 'active' | 'inactive';
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  prefix: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ['teacher', 'admin'], default: 'teacher' },
  schoolId: { type: Schema.Types.ObjectId, ref: 'School', required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
});
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;