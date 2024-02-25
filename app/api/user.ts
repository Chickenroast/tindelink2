// api/user.ts
"use server";
import { getUser } from "../data/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query; // Retrieve email from query parameters
  if (typeof email !== "string") {
    res.status(400).json({ error: "Invalid email parameter" });
    return;
  }
  const user = await getUser(email);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.status(200).json(user);
}
