// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";
import { asyncCatch } from "../../../utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dir = path.join(process.cwd(), "public", "list", `fancy.pdf`);
  const [err, file] = await asyncCatch(fs.readFile(dir));
  //@ts-ignore
  if (err) return res.status(500).json({ message: "list not found" });
  res.setHeader("Content-type", "application/pdf");
  // res.setHeader("content-disposition", `attachment; filename=${type}.pdf`);
  //@ts-ignore
  res.status(200).send(file);
}
