import { defineStore } from "pinia";

import type { IAuthResponce, IUser } from "~/common.types.ts";

type IToken = IAuthResponce["token"];

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<IToken>("");
    const user = ref<IUser | Record<string, string>>({});

    return {
      token,
      user,
      setUser: (value: IUser) => (user.value = value),
      setToken: (value: IToken) => (token.value = value),
      clearUser: () => (user.value = {}),
      clearToken: () => (token.value = "")
    };
  },
  { persist: true }
);
