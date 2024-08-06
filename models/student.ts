// models/Student.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  prefix: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  schoolId: mongoose.Types.ObjectId;
  parentName: string;
  parentPhone: string;
}

const StudentSchema: Schema = new Schema({
  prefix: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  schoolId: { type: Schema.Types.ObjectId, ref: 'School', required: true },  // use populate() to get the school details
  parentName: { type: String },
  parentPhone: { type: String, trim: true, match: [/^\d{10}$/, 'Please fill a valid phone number'] },
}, { timestamps: true });

export default mongoose.models.Student || mongoose.model<IStudent>('Student', StudentSchema);