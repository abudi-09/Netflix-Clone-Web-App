import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const PORT = ENV_VARS.PORT;

// for ES modules, derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// Serve frontend static assets when in production
if (ENV_VARS.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "..", "frontend", "dist");
  app.use(express.static(clientBuildPath));

  // serve index.html for any unknown route (client-side routing)
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
  connectDB();
});
