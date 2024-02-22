"use client";
// SignOut.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "app/auth";

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    async function handleSignOut() {
      let session = await auth(); // Assuming auth() is an async function that returns a session object
      if (!session?.user?.email) {
        router.push("/");
      } else {
        router.push("/blabla");
      }
    }

    handleSignOut();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [router]);

  // Render null on the server-side
  return null;
}

// import { auth, signOut } from "app/auth";
// import { useRouter } from "next/router";

// export default async function SignOut() {
//   let session = await auth();
//   const router = useRouter();

//   if (!session?.user?.email) {
//     router.push("/");
//   } else {
//     router.push("/blabla");
//   }
// }
