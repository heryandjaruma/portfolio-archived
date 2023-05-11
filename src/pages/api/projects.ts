import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/projects.json";
import Project from "@/interface/project";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json(data);
}
