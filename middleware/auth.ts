export default defineNuxtRouteMiddleware(() => {
  if (!useAuthStore().token) {
    return navigateTo("/auth");
  }
});
