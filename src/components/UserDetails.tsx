import { useEffect, useState, useMemo } from "react";
import { fetchUserById } from "../services/api";

export default function UserDetail({ id }: { id: number }) {
  const [user, setUser] = useState<ComponentProps.Users | null>(null);

  useEffect(() => {
     const loadUsers = async () => {
       try {
         const data = await fetchUserById(id);
         setUser(data);
       } catch (error) {
         console.error("Error fetching users:", error);
       }
     };
     loadUsers();
   }, []);

  const userFiltered = useMemo(() => user, [user]);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">User Detail</h2>
      {userFiltered ? (
        <div className="text-center">
          <img src={userFiltered.avatar} alt={userFiltered.first_name} className="w-20 h-20 rounded-full mx-auto" />
          <p className="mt-2 font-semibold">{userFiltered.first_name} {userFiltered.last_name}</p>
          <p className="text-gray-500">{userFiltered.email}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}
