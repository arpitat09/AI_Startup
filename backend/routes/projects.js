import express from "express";
import {
  getAllProjectsHandler,
  getProjectByIdHandler,
  saveProjectHandler,
  deleteProjectHandler
} from "../controllers/projectController.js";

const router = express.Router();

// GET /api/projects
router.get("/projects", getAllProjectsHandler);

// GET /api/projects/:id
router.get("/projects/:id", getProjectByIdHandler);

// POST /api/projects
router.post("/projects", saveProjectHandler);

// DELETE /api/projects/:id
router.delete("/projects/:id", deleteProjectHandler);

export default router;
