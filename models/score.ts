// models/Growth.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IScore extends Document {
  studentId: mongoose.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  score: number;
  total: number;
}

const GrowthSchema: Schema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Growth || mongoose.model<IScore>('Growth', GrowthSchema);