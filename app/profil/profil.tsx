// import { useEffect, useState } from "react";
// import UpdateUser from "./page";
// import { getUser } from "../data/db";
// import { User } from "./page";

// export default function ProfilPage() {
//   const [user, setUser] = useState<User | null>(null); // Specify the type of state as User | null

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userData = await getUser("example@example.com");
//         if (userData.length > 0) {
//           setUser(userData[0]); // Set user data if available
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       <h1>User Profile</h1>
//       {user && <UpdateUser user={user} />}
//     </div>
//   );
// }
