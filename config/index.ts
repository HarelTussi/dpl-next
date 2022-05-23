export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://dpl-next.vercel.app/api"
    : "https://server.thediamondpricelist.com/get-list";
