import { useState } from "react";
import { toast } from "react-toastify";
import { createUser } from "../services/api.ts";

export default function CreateUserForm({ setUsers }: ComponentProps.CreateUserFormProps) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await createUser( name, job );
      const newUser: ComponentProps.Users = {
        id: response.id,
        first_name: name,
        last_name: "",
        email: "",
        avatar: "https://via.placeholder.com/150"
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setName("");
      setJob("");
      toast.success("User created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create user.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create User</h2>
      <input
        className="block w-full p-2 border rounded-md mb-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="block w-full p-2 border rounded-md mb-2"
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
        Create
      </button>
    </form>
  );
}
