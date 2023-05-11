import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/awards.json";
import Award from "@/interface/award";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Award | { message: string }>
) {
  const { id } = req.query;
  const award = data.find((item) => item.id === parseInt(id as string));

  if (award) {
    res.status(200).json(award);
  } else {
    res.status(404).json({ message: "Award not found" });
  }
}
