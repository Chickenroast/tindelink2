// // app/api/updateProfile.ts
// "use server";
// import { NextApiRequest, NextApiResponse } from "next";
// import { updateUser } from "../data/db";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { id, updates } = req.body;
//     try {
//       const result = await updateUser(id, updates);
//       res.status(200).json({ success: true, data: result });
//     } catch (error) {
//       console.error("Error updating user:", error);
//       res.status(500).json({ success: false, error: "Failed to update user." });
//     }
//   } else {
//     res.status(405).json({ success: false, error: "Method Not Allowed" });
//   }
// }
