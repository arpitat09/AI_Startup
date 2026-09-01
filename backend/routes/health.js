import express from "express";

const router = express.Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "AI Co-Founder API",
    version: "2.0.0",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

export default router;
