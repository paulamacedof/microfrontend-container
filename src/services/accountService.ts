import { AccountResponse } from "@/models/account";
import api from "./axios";

const baseURL = "/account";

export const getAccount = async (token: string): Promise<AccountResponse> => {
  try {
    const request = await api.get(`${baseURL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request.data.data;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};
