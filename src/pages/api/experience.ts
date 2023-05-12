import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/experiences.json";
import Experience from "@/interface/experience";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Experience[]>
) {
  res.status(200).json(data);
}
