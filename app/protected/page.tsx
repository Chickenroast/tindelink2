// ProtectedPage.tsx
import { GetServerSidePropsContext } from "next";
import { auth, signOut } from "app/auth";
import Button from "app/protected/button";
import UpdateProfilePage from "./update/page";
import { getUser } from "../data/db";
import SignOut from "./signout"; // Import the SignOut component

interface UserData {
  id: number;
  email: string;
  role: string;
  location: string;
}

interface ProtectedPageProps {
  userData: UserData | null;
}

export default function ProtectedPage({ userData }: ProtectedPageProps) {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        {userData ? (
          <>
            <p>You are logged in as {userData.email}</p>

            <Button path="/protected/update">Update</Button>
          </>
        ) : (
          <>
            <p>You are not logged in.</p>
          </>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const session = await auth(context);
    let userData: UserData | null = null;
    if (session?.user) {
      userData = await getUser(session.user.email!); // Use optional chaining and type assertion
    }
    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      props: {
        userData: null,
      },
    };
  }
}
