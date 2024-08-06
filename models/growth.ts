// models/Growth.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IGrowth extends Document {
  studentId: mongoose.Types.ObjectId;
  date: Date;
  weight: number;
  height: number;
}

const GrowthSchema: Schema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  date: { type: Date, required: true },
  weight: { type: Number },
  height: { type: Number },
});

export default mongoose.models.Growth || mongoose.model<IGrowth>('Growth', GrowthSchema);