import { useState } from "react";
import { updateUser } from "../services/api";
import { toast } from "react-toastify";

interface User {
  id: number;
  first_name: string;
  email: string;
}

interface Props {
  user: User;
  onUpdate: (updatedUser: User) => void;
}

export default function UpdateUserForm({ user, onUpdate }: Props) {
  const [first_name, setName] = useState(user.first_name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const updatedUser = await updateUser(user.id, first_name, email);
      onUpdate(updatedUser); 
      toast("User Updated Successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user.");
    }
  };
  
  
  

  return (
    <form onSubmit={handleUpdate} className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Update User</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={first_name} 
        onChange={(e) => setName(e.target.value)} 
        required
        className="border p-2 rounded w-full"
      />
      <input 
        type="text" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
        className="border p-2 rounded w-full mt-2"
      />
      <button 
        type="submit" 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full">
        Update
      </button>
    </form>
  );
}
