export const NEXT_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://dpl-next.vercel.app/api"
    : "http://localhost:3000/api";
