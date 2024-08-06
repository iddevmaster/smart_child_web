// models/School.ts
import mongoose, { Schema, Document } from 'mongoose';


export interface ISchool extends Document {
  name: string;
  address: string;
  phone: string;
  email: string;
  pageUrl: string;
}

const SchoolSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  pageUrl: { type: String },
}, {timestamps: true});

const School = mongoose.models.School || mongoose.model<ISchool>('School', SchoolSchema);
export default School;