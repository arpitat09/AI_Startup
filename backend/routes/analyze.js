import express from "express";
import { analyzeStartupHandler, recalculateFinancialsHandler } from "../controllers/analysisController.js";

const router = express.Router();

// POST /api/analyze
router.post("/analyze", analyzeStartupHandler);

// POST /api/financials/recalculate
router.post("/financials/recalculate", recalculateFinancialsHandler);

export default router;