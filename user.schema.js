import mongoose from 'mongoose'
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name required "]
  },
  email: {
    type: String,
    required: [true, "email required "]
  },
  password: {
    type: String,
    required: [true, "password required "]
  }
});
export const User = mongoose.model('Query', blogSchema);