import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    // ✅ fixed spelling
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  searchhistory: {
    type: Array,
    default: [],
  },
});

export const User = mongoose.model("User", userSchema);
