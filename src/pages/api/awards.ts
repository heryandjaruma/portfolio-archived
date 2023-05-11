import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/awards.json";
import Award from "@/interface/award";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Award[]>
) {
  res.status(200).json(data);
}
