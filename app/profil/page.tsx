// "use client";
// import { Form } from "app/form";
// import { SubmitButton } from "app/submit-button";
// import { useState } from "react";
// import { updateUser } from "../data/db";

// export interface User {
//   id: number;
//   email: string;
//   password: string;
//   role: string;
//   location: string;
// }

// export interface UpdateUserProps {
//   user: User;
// }

// export default function UpdateUser({ user }: UpdateUserProps) {
//   const [location, setLocation] = useState(user.location);
//   const [selectedOption, setSelectedOption] = useState(user.role);

//   const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setLocation(event.target.value);
//   };

//   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     updateUser(user.id, { location, role: selectedOption })
//       .then(() => {
//         // Handle success, maybe show a success message or redirect
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("Error updating user:", error);
//       });
//   };

//   return (
//     <div>
//       <h1>Update User Information</h1>
//       <Form action={handleSubmit}>
//         <input
//           type="text"
//           value={location}
//           onChange={handleLocationChange}
//           placeholder="Location"
//         />
//         <select value={selectedOption} onChange={handleOptionChange}>
//           <option value="">Select Role</option>
//           <option value="jobSeeker">Find a job</option>
//           <option value="employer">Hiring</option>
//         </select>
//         <SubmitButton>Update</SubmitButton>
//       </Form>
//     </div>
//   );
// }
