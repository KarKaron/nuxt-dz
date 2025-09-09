<template lang="pug">
  div
    sorting(
      :sort="sort"
      @change-sort="sort = $event"
    )
    post-card(
      v-for="post in posts.posts"
      :key="post.id"
      v-bind="post"
    )
    paginator(
      :page="+page"
      :pages="pages"
      @change-page="page = $event"
    )
</template>

<script setup lang="ts">
import { ESort } from "~/common.enum";
import type { IGetPostsResponse } from "~/common.types";

useSeoMeta({
  title: "Список постов",
  description: "Список постов",
})

const route = useRoute();
const router = useRouter();
const API_URL = useAPI();

const LIMIT = 4;

const page = ref(route.query.page ?? 1);
const sort = ref(route.query.sort ?? ESort.date);

const query = computed(() => ({
  page: route.query.page ?? page.value,
  page_size: LIMIT,
  sort: route.query.sort ?? sort.value
}));

const { data: posts } = await useFetch<IGetPostsResponse>(API_URL.GET_POSTS, {
  key: "get-posts",
  query
});

const pages = computed(() => Math.ceil(+posts.value!.total / LIMIT));

watch([page, sort], () =>
  router.replace({ query: { page: page.value, sort: sort.value } })
);
</script>
