export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://dpl-next.vercel.app/api"
    : "http://localhost:5005/get-list";
