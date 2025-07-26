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
  searchHistory: [
    {
      id: { type: Number, required: true },
      image: { type: String, required: true },
      title: { type: String, required: true },
      searchType: { type: String, required: true }, // "movie" or "tv"
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

export const User = mongoose.model("User", userSchema);
