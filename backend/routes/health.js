import express from "express";

const router = express.Router();

const healthHandler = (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "AI Co-Founder API",
    version: "2.0.0",
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString()
  });
};

router.get("/health", healthHandler);
router.get("/", healthHandler);

export default router;
