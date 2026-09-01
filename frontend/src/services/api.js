/**
 * API client service for communicating with the AI Co-Founder backend
 */

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data?.error?.message || `Request failed with status ${response.status}`;
      const err = new Error(errorMessage);
      err.status = response.status;
      err.code = data?.error?.code || "API_ERROR";
      throw err;
    }

    return data;
  } catch (error) {
    console.error(`[API Request Error] ${endpoint}:`, error);
    throw error;
  }
}

export async function analyzeStartupApi(payload) {
  return request("/api/analyze", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function sendChatMessageApi(message, idea, context = {}) {
  return request("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message, idea, context })
  });
}

export async function recalculateFinancialsApi(financialInputs) {
  return request("/api/financials/recalculate", {
    method: "POST",
    body: JSON.stringify(financialInputs)
  });
}

export async function fetchSavedProjectsApi() {
  return request("/api/projects", {
    method: "GET"
  });
}

export async function saveProjectApi(project) {
  return request("/api/projects", {
    method: "POST",
    body: JSON.stringify(project)
  });
}

export async function deleteProjectApi(id) {
  return request(`/api/projects/${id}`, {
    method: "DELETE"
  });
}

export async function checkHealthApi() {
  return request("/health", {
    method: "GET"
  });
}
