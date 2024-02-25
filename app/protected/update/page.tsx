// app/protected/update/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
  id: string;
  email: string;
  role: string;
  location: string;
}

interface UpdateProfilePageProps {
  userId: string;
}

export default function UpdateProfilePage({ userId }: UpdateProfilePageProps) {
  const [userData, setUserData] = useState<UserData>({
    id: "",
    email: "",
    role: "",
    location: "",
  });

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        const userData: UserData = response.data;
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, [userId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/updateProfile", {
        id: userId,
        updates: userData,
      });
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form className="bg-purple" onSubmit={handleSave}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={userData.location}
            onChange={handleInputChange}
          />
        </label>
        <button className="bg-purple" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
