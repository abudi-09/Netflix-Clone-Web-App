import express from "express";
import {
  getTrendingMovie,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovie,
  getbycategory,
} from "../controllers/movie.controller.js";
const router = express.Router();
router.get("/trending", getTrendingMovie);
router.get("/:id/trailer", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovie);
router.get("/:category", getbycategory);
export default router;
