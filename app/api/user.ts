// api/user.ts
import { getUser } from "../data/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;
  const user = await getUser(email);

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.status(200).json(user);
}
