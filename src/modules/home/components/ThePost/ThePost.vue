<template>
  <div class="the-post">
    <AppCard>
      <ThePostLayout>
        <template #side>
          <AppLikeCounter
            v-model="likes"
            data-testid="likeCounter"
          />
        </template>
        <template #header>
          <ThePostHeader
            :post="post"
            data-testid="postHeader"
          />
        </template>
        <template #body>
          <p
            class="post-text"
            data-testid="postContent"
          >
            {{ post.text }}
          </p>
        </template>
        <template #actions>
          <ThePostActions
            :post="post"
            @reply="formState.showForm = true"
            @delete="onDelete"
            @edit="onEdit"
          />
        </template>
      </ThePostLayout>
    </AppCard>
    <ThePostForm 
      v-if="formState.showForm"
      :user="getUser"
      :parent-id="formState.mode === 'REPLY' ? post.id : null"
      :post-id="formState.mode === 'UPDATE' ? post.id : null"
      :text="formState.formText"
      @send="onReply"
    >
      <template #form-button>
        {{ formState.mode }}
      </template>
    </ThePostForm>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useUserStore } from '@/store/user.js';
import { usePostsStore } from '@/store/posts.js';

import AppCard from '@/components/AppCard/AppCard.vue';
import AppLikeCounter from '@/components/AppLikeCounter/AppLikeCounter.vue';
import ThePostHeader from '@/modules/home/components/ThePostHeader/ThePostHeader.vue';
import ThePostActions from '@/modules/home/components/ThePostActions/ThePostActions.vue';
import ThePostForm from '@/modules/home/components/ThePostForm/ThePostForm.vue';
import ThePostLayout from '@/modules/home/layouts/ThePostLayout.vue';

export default {
  components: {
    AppCard,
    AppLikeCounter,
    ThePostHeader,
    ThePostForm,
    ThePostLayout,
    ThePostActions
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  emits: [
    'update:likes'
  ],
  setup(props, { emit }) {
    const userStore = useUserStore();
    const postsStore = usePostsStore();

    const likes = computed({
      set: (value) => {
        emit('update:likes', value);
      },
      get: () => {
        return props.post.likes;
      }
    });

    const formState = reactive({
      showForm: false,
      formText: '',
      mode: 'REPLY'
    });

    function resetForm() {
      formState.showForm = false;
      formState.formText = '';
      formState.mode = 'REPLY';
    }

    function onReply(post) {
      if (formState.mode === 'REPLY') {
        postsStore.addPost(post);
      } else if (formState.mode === 'UPDATE') {
        postsStore.editPost(post);
      }

      resetForm();
    }

    function onDelete(postId) {
      postsStore.deletePost(postId);
    }

    function onEdit(post) {
      formState.formText = post.text;
      formState.mode = 'UPDATE';
      formState.showForm = true;
    }
    
    return {
      likes,
      formState,
      onReply,
      onDelete,
      onEdit,
      getUser: userStore.getUser
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.the-post {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  row-gap: 8px;
}
.post-text {
  color: $neutral-medium;
  line-height: 120%;
}
</style>
