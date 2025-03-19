import { UserResponse } from "@/models/user";
import { getUser } from "../services/userServices";
import { toast } from "sonner";
import { create } from "zustand";

interface UserStore {
  user: UserResponse | null;
  getUser: () => Promise<void>;
  logoff: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    username: "",
    email: "",
    password: "",
    id: "",
  },

  getUser: async () => {
    try {
      const user = await getUser();
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error: unknown) {
      toast.error("Erro ao carregar usuário");
      console.error(error);
    }
  },

  logoff: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null });
    toast.success("Usuário removido com sucesso!");
  },
}));
