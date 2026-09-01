/**
 * Structured logger utility
 */
const isDev = process.env.NODE_ENV !== "production";

export const logger = {
  info: (msg, meta = {}) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${msg}`, Object.keys(meta).length ? JSON.stringify(meta) : "");
  },
  warn: (msg, meta = {}) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`, Object.keys(meta).length ? JSON.stringify(meta) : "");
  },
  error: (msg, error = {}) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, error?.message || error);
    if (isDev && error?.stack) {
      console.error(error.stack);
    }
  },
  debug: (msg, meta = {}) => {
    if (isDev) {
      console.log(`[DEBUG] ${new Date().toISOString()} - ${msg}`, Object.keys(meta).length ? JSON.stringify(meta) : "");
    }
  }
};
