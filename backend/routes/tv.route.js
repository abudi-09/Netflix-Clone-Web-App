import express from "express";

import {
  getSimilarTvs,
  getTrendingTv,
  getTvbycategory,
  getTvDetails,
  getTvTrailers,
} from "../controllers/tv.controller.js";
const router = express.Router();
router.get("/trending", getTrendingTv);
router.get("/:id/trailer", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvbycategory);
export default router;
