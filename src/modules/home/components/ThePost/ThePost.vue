<template>
  <div class="the-post">
    <AppCard>
      <div class="post-layout">
        <AppLikeCounter
          v-model="likes"
          data-testid="likeCounter"
        />
        <div class="post-body">
          <ThePostHeader
            :post="post"
            data-testid="postHeader"
            @reply="formState.showForm = true"
            @delete="onDelete"
            @edit="onEdit"
          />
          <p
            class="post-text"
            data-testid="postContent"
          >
            {{ post.text }}
          </p>
        </div>
      </div>
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
import ThePostForm from '@/modules/home/components/ThePostForm/ThePostForm.vue';

export default {
  components: {
    AppCard,
    AppLikeCounter,
    ThePostHeader,
    ThePostForm
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
  width: 768px;
  max-width: 768px;
  row-gap: 8px;
}
.post-layout {
  display: flex;
  column-gap: 24px;

  .post-body {
    display: flex;
    flex-direction: column;
    width: 100%;

    .post-header {
      display: flex;
      justify-content: space-between;

      .post-header-details {
        display: flex;
        column-gap: 16px;
        align-items: center;

        .post-date {
          color: $neutral-medium;
        }
      }
    }

    .post-text {
      color: $neutral-medium;
      line-height: 120%;
    }
  }
}
</style>
