/**
 * Centralized API configuration.
 * Uses NEXT_PUBLIC_API_URL from environment variables.
 * Falls back to localhost:8787 for local development.
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";
