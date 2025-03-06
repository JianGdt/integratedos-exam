import { useEffect, useState, useCallback } from "react";
import { deleteUser, fetchUsers } from "../services/api";
import UserCard from "./UserCard";
import UserDetail from "./UserDetails";
import UserModal from "./Modal/UserModal";
import { toast } from "react-toastify";
import CreateUserForm from "./CreateUserForm";
import UpdateUserForm from "./UpdateUserForm";

export default function UsersList() {
  const [users, setUsers] = useState<ComponentProps.Users[]>([]);
  const [selectedUser, setSelectedUser] = useState<ComponentProps.Users | null>(null);
  const [modalType, setModalType] = useState<"details" | "edit" | "delete" | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    })();
  }, []);

  const openModal = useCallback((type: "details" | "edit" | "delete", user: ComponentProps.Users) => {
    setSelectedUser(user);
    setModalType(type);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedUser(null);
    setModalType(null);
  }, []);

  const handleUserUpdate = useCallback((updatedUser: ComponentProps.Users) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
    localStorage.setItem("users", JSON.stringify(users));
    closeModal();
  }, [closeModal, users]);

  const handleUserDelete = useCallback(async (id: number) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.filter((user) => user.id !== id);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast.error("Failed to delete user.");
    }
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <CreateUserForm setUsers={setUsers} />
      <h2 className="text-xl font-semibold mb-4">Users List</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.length === 0 ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={() => openModal("edit", user)}
              onDelete={() => handleUserDelete(user.id!)}
              onClick={() => openModal("details", user)}
            />
          ))
        )}
      </ul>

      <UserModal isOpen={!!modalType} onClose={closeModal}>
        {modalType === "details" && selectedUser && <UserDetail id={selectedUser.id!} />}
        {modalType === "edit" && selectedUser && (
          <UpdateUserForm user={selectedUser} onUpdate={handleUserUpdate} />
        )}
      </UserModal>
    </div>
  );
}
