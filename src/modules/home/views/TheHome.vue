<template>
  <section>
    <ThePost
      v-for="(post, i) in posts"
      :key="`post_${i}`"
      v-model:likes="post.likes"
      :post="post"
    />
    <ThePostForm
      :user="getUser"
      :parent-id="null"
      @send="onSend"
    >
      <template #form-button>
        SEND
      </template>
    </ThePostForm>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '@/store/user.js';
import { usePostsStore } from '@/store/posts.js';
import ThePost from '@/modules/home/components/ThePost/ThePost.vue';
import ThePostForm from '@/modules/home/components/ThePostForm/ThePostForm.vue';

export default {
  components: {
    ThePost,
    ThePostForm
  },
  setup() {
    const userStore = useUserStore();
    const postsStore = usePostsStore();
    const posts = ref(postsStore.getPosts);

    postsStore.$subscribe((_, state) => {
      posts.value = state.posts;
    });

    function onSend(post) {
      postsStore.addPost(post);
    }

    return {
      posts,
      onSend,
      getUser: userStore.getUser
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

@media screen and (max-width: 425px) {
  section {
    padding: 12px;
  }
}
</style>
