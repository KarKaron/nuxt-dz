export function useAPI() {
  const API_URL = useRuntimeConfig().public.apiUrl;

  return {
    AUTH: `${API_URL}/auth/login`,
    GET_POSTS: `${API_URL}/posts`,
  }
}
