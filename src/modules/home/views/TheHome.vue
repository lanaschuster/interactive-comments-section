<template>
  <section>
    <ThePost
      v-for="(post, i) in posts"
      :key="`post_${i}`"
      v-model:likes="post.likes"
      :post="post"
    />
  </section>
</template>

<script>
import { ref } from 'vue';
import { usePostsStore } from '@/store/posts.js';
import ThePost from '@/modules/home/components/ThePost/ThePost.vue';

export default {
  components: {
    ThePost
  },
  setup() {
    const postsStore = usePostsStore();
    const posts = ref(postsStore.getPosts);

    postsStore.$subscribe((_, state) => {
      posts.value = state.posts;
    });

    return {
      posts
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  row-gap: 24px;
}
</style>
