// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  availableDiamonds: string;
  suppliers: string;
  totalValue: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET")
    return res.status(500).send({
      availableDiamonds: "0",
      suppliers: "0",
      totalValue: "0",
    });
  res.status(200).json({
    availableDiamonds: "1.6M",
    suppliers: "4,800",
    totalValue: "6.7B$",
  });
}
