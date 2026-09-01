import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import analyzeRoutes from "./routes/analyze.js";
import chatRoutes from "./routes/chat.js";
import projectRoutes from "./routes/projects.js";
import healthRoutes from "./routes/health.js";
import { errorHandler } from "./utils/errorHandler.js";
import { logger } from "./utils/logger.js";

dotenv.config();

const app = express();

// Security & Rate Limiting
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX) || 150,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: "RATE_LIMIT_EXCEEDED",
      message: "Too many requests from this IP, please try again after 15 minutes."
    }
  }
});

// Middlewares
app.use(limiter);
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Request Logging in Dev
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    logger.debug(`${req.method} ${req.path}`);
    next();
  });
}

// Health Check Endpoints
app.use("/", healthRoutes);
app.use("/api", healthRoutes);

// API Resource Endpoints
app.use("/api", analyzeRoutes);
app.use("/api", chatRoutes);
app.use("/api", projectRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: "ROUTE_NOT_FOUND",
      message: `The route ${req.method} ${req.originalUrl} does not exist.`
    }
  });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  logger.info(`AI Co-Founder API Server running on port ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
  logger.info(`Health check available at http://localhost:${PORT}/health`);
});

export default app;