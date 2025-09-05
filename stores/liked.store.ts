import { defineStore } from "pinia";
import { ELike, type IPost } from "~/common.types";

interface ILiked {
  id: IPost["id"];
  action: ELike;
}

export const useLikedStore = defineStore(
  "liked",
  () => {
    const posts = ref<ILiked[]>([]);

    async function addToLiked(id: ILiked["id"], action: ILiked["action"]) {
      posts.value.push({ id, action });

      try {
        await $fetch(`${useAPI().GET_POSTS}/${id}/${action}`, {
          method: "POST"
        });
      } catch (error) {
        console.log(error);
      }
    }

    function checkActive(id: ILiked["id"], action: ILiked["action"]) {
      const elem = posts.value.find((item) => item.id === id);
      if (!elem) return;

      return elem.action === action;
    }

    return {
      posts,
      addToLiked,
      checkActive
    };
  },
  { persist: true }
);
