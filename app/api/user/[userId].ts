"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../../data/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;

  try {
    if (userId === undefined) {
      // Handle the case where userId is undefined
      return res.status(400).json({ error: "User ID is missing" });
    }

    // Convert user ID to string
    const userIdString = Array.isArray(userId) ? userId[0] : userId;

    // Fetch user data based on user ID
    const user = await getUser(userIdString);

    if (!user) {
      // User not found, return 404 response
      return res.status(404).json({ error: "User not found" });
    }

    // Extract the relevant user data
    const userData = {
      id: user.id,
      email: user.email, // Include email
      role: user.role, // Include role
      location: user.location, // Include location
      // Add any additional fields you want to include here
    };

    // Return user data as JSON response
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
