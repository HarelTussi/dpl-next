// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const errorData = {
  availableDiamonds: "0",
  suppliers: "0",
  totalValue: "0",
};

const successData = {
  availableDiamonds: "1.6M",
  suppliers: "4,800",
  totalValue: "6.7B$",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res
    .status(200)
    .json(JSON.stringify(req.method !== "GET" ? errorData : successData));
}
