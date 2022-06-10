export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://dpl-next.vercel.app/api"
    : "http://localhost:5005/get-list";
export const INISGHTS_CLIENT_URL = "https://app.thediamondpricelist.com";
export const DPL_MAIL_ADDRESS = "info@thediamondpricelist.com";
