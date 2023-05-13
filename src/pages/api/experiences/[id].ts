import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/experiences.json";
import Experience from "@/interface/experience";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Experience | { message: string }>
) {
  const { id } = req.query;
  const experience = data.find((item) => item.id === parseInt(id as string));

  if (experience) {
    res.status(200).json(experience);
  } else {
    res.status(404).json({ message: "Experience not found" });
  }
}
