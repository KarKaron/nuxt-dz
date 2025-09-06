import { defineStore } from "pinia";

import type { IAuthResponce } from "~/common.types.ts";

type IToken = IAuthResponce["token"];

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<IToken>("");

    return {
      token,
      setToken: (value: IToken) => (token.value = value),
      clearToken: () => (token.value = "")
    };
  },
  { persist: true }
);
