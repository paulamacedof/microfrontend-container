import { UserRequest, UserResponse } from "@/models/user";
import api from "./axios";

export const login = async (user: UserRequest) => {
  try {
    const request = await api.post(`/login`, user);

    localStorage.setItem("token", request.data.token);

    return request.data.data.token;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUser = async (): Promise<UserResponse> => {
  try {
    const response = await api.get(`/user`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
