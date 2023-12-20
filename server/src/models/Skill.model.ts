import { Document, Schema, model } from 'mongoose';

export interface ISkillDoc extends Document {
  name: string
  description: string
}

const skillSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

const Skill = model<ISkillDoc>('skills', skillSchema);

export default Skill;
