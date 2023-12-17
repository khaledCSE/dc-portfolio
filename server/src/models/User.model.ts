import { Document, Schema, model } from 'mongoose';

export interface UserDoc extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
}

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<UserDoc>('users', userSchema);

export default User;
