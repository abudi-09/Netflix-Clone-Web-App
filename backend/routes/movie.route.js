import express from "express";
import {
  getTrendingMovie,
  getMovieTrailers,
} from "../controllers/movie.controller.js";
const router = express.Router();
router.get("/trending", getTrendingMovie);
router.get("/:id/trailer", getMovieTrailers);
export default router;
