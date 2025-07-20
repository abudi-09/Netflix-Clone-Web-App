import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined in the .env file.");
}

if (!process.env.JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in the .env file.");
}

export const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || "development",
  TMDB_API_KEY: process.env.TMDB_API_KEY,
};
