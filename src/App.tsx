import { lazy, Suspense, useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "./index.css";

const UsersList = lazy(() => import("./components/UserLists"));

export default function App() {
  const [users, setUsers] = useState<ComponentProps.Users[]>([]);
  const memoizedUsers = useMemo(() => users, [users]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">User Management</h1>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <UsersList users={memoizedUsers} setUsers={setUsers} />
        </Suspense>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
