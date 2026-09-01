/**
 * Persistent Storage Layer for Startup Projects and Reports
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { logger } from "../utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "projects.json");

// In-memory store
let projectsStore = new Map();

// Initialize data from file if present
function loadFromDisk() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const list = JSON.parse(raw);
      if (Array.isArray(list)) {
        list.forEach(p => projectsStore.set(p.id, p));
        logger.info(`[Storage] Loaded ${projectsStore.size} projects from disk`);
      }
    }
  } catch (err) {
    logger.warn(`[Storage] Could not load disk cache: ${err.message}`);
  }
}

function saveToDisk() {
  try {
    const list = Array.from(projectsStore.values());
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch (err) {
    logger.warn(`[Storage] Could not save disk cache: ${err.message}`);
  }
}

// Initial load
loadFromDisk();

export const storage = {
  saveProject: (project) => {
    if (!project || !project.id) return null;
    const now = new Date().toISOString();
    const existing = projectsStore.get(project.id);
    const updated = {
      ...project,
      createdAt: existing?.createdAt || now,
      updatedAt: now
    };
    projectsStore.set(project.id, updated);
    saveToDisk();
    return updated;
  },

  getProject: (id) => {
    return projectsStore.get(id) || null;
  },

  getAllProjects: () => {
    return Array.from(projectsStore.values()).sort(
      (a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt)
    );
  },

  deleteProject: (id) => {
    const existed = projectsStore.delete(id);
    if (existed) saveToDisk();
    return existed;
  }
};
