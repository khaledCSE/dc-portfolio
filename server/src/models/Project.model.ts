import { Document, Schema, model } from 'mongoose';

export interface IProjectDoc extends Document {
  name: string
  techStack: string[]
  description: string
}

const projectSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  techStack: [{ type: String }],
  skills: [{ type: Schema.Types.ObjectId, ref: 'skills' }],
});

const Project = model<IProjectDoc>('projects', projectSchema);

export default Project;
