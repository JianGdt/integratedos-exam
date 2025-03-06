import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchUsers = async () => {
  const response = await api.get("/users?page=1");
  return response.data.data;
};

export const fetchUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data.data;
};

export const createUser = async (name: string, job: string) => {
  const response = await api.post("/users", { name, job });
  return response.data;
};

export const updateUser = async (id: number, name: string, job: string) => {
  const response = await api.put(`/users/${id}`, { name, job });
  return response.data;
};

export const deleteUser = async (id: number) => {
  await api.delete(`/users/${id}`);
  return { message: "User deleted successfully" };
};
