/**
 * Project Persistence Controller
 */
import { storage } from "../data/storage.js";
import { errorResponse } from "../utils/errorHandler.js";

export function getAllProjectsHandler(req, res) {
  const projects = storage.getAllProjects();
  return res.status(200).json({
    success: true,
    data: projects
  });
}

export function getProjectByIdHandler(req, res) {
  const { id } = req.params;
  const project = storage.getProject(id);
  if (!project) {
    return errorResponse(res, 404, "Project not found", "PROJECT_NOT_FOUND");
  }
  return res.status(200).json({
    success: true,
    data: project
  });
}

export function saveProjectHandler(req, res) {
  const project = req.body;
  if (!project || !project.id) {
    return errorResponse(res, 400, "Invalid project payload", "INVALID_PROJECT");
  }
  const saved = storage.saveProject(project);
  return res.status(200).json({
    success: true,
    data: saved
  });
}

export function deleteProjectHandler(req, res) {
  const { id } = req.params;
  const deleted = storage.deleteProject(id);
  if (!deleted) {
    return errorResponse(res, 404, "Project not found", "PROJECT_NOT_FOUND");
  }
  return res.status(200).json({
    success: true,
    message: "Project deleted successfully"
  });
}
