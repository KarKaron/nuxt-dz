import type { IAuthResponce } from "~/common.types.ts";

export default defineNuxtRouteMiddleware(() => {
  const auth = useCookie<{ token: IAuthResponce["token"] }>("auth");

  if (!auth.value?.token) {
    return navigateTo("/auth");
  }
});
