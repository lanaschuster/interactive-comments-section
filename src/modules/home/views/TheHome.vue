<template>
  <article>
    <section>
      <ThePost
        v-for="(post, i) in posts"
        :key="`post_${i}`"
        v-model:likes="post.likes"
        :post="post"
        :children="getChildren(post.id)"
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
  </article>
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
      posts.value = state.posts.filter(post => post.parent === null);
    });

    function onSend(post) {
      postsStore.addPost(post);
    }

    return {
      posts,
      onSend,
      getUser: userStore.getUser,
      getChildren: postsStore.getChildren
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

article {
  height: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
}

section {
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
}

@media screen and (max-width: 425px) {
  article {
    padding: 12px;
  }
}
</style>
