"use server";
// api/auth/login.ts
import { getUser } from "@/app/data/db";
import { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "@/app/auth"; // Import the signIn function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }
    const user = await signIn(email, password);
    if (user) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
