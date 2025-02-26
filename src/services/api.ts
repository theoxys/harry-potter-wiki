import { Character } from "../types/Character";

const API_BASE_URL = "https://hp-api.onrender.com/api";

export class APIError extends Error {
  constructor(public status?: number, message?: string) {
    super(message);
    this.name = "APIError";
  }
}

async function fetchAPI<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new APIError(response.status, `Request Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(undefined, "Server connection error");
  }
}

export const api = {
  characters: {
    getAll: () => fetchAPI<Character[]>("/characters"),
    getById: (id: string) => fetchAPI<Character[]>(`/character/${id}`),
    getStudents: () => fetchAPI<Character[]>("/characters/students"),
    getStaff: () => fetchAPI<Character[]>("/characters/staff"),
  },
};
