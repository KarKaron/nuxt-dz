<template lang="pug">
  .auth__page
    .login
      .login__title Вход на платформу
      form.login__form
        input-field(
          v-model="login"
          icon-name="icons:email"
          placeholder="Email"
        )
        input-field(
          v-model="password"
          icon-name="icons:key"
          placeholder="Пароль"
          type="password"
        )
      action-button(
        :is-disabled="!login || !password"
        @click.stop.prevent="loginHandler"
      ) Войти в аккаунт
</template>

<script setup lang="ts">
import type { IAuthResponce } from "~/common.types.ts";

definePageMeta({
  layout: "auth"
});

const API_URL = useAPI();
const store = useAuthStore();

const login = ref("");
const password = ref("");

async function loginHandler() {
  const data = await $fetch<IAuthResponce>(API_URL.AUTH, {
    method: "POST",
    body: {
      email: login.value,
      password: password.value
    }
  });
  store.setToken(data.token);
  store.setUser(data.user);
  useRouter().replace("/");
}
</script>

<style scoped>
.auth__page {
  width: calc(100vw - 80px);
  height: calc(100vh - 38px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  width: 301px;
  margin: 0 auto;

  &__title {
    font-family: var(--font);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  button {
    width: 100%;
  }
}
</style>
