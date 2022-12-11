<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="the-post">
    <AppCard>
      <ThePostLayout>
        <template #side>
          <AppLikeCounter
            :likes="post.likes"
            :status="post.status"
            data-testid="likeCounter"
            @like="onLike"
            @dislike="onDislike"
          />
        </template>
        <template #header>
          <ThePostHeader
            :post="post"
            data-testid="postHeader"
          />
        </template>
        <template #body>
          <ThePostUpdateForm
            v-if="formState.mode === 'UPDATE'"
            :post-content="post.text"
            @update:post-text="onUpdate"
          />
          <p
            v-else
            class="post-text"
            data-testid="postContent"
            v-html="usePostTextFormatter(post.text)"
          />
        </template>
        <template #actions>
          <ThePostActions
            :post="post"
            @reply="onReply"
            @delete="onDelete"
            @edit="onEdit"
          />
        </template>
      </ThePostLayout>
    </AppCard>
    <ThePostForm
      v-if="formState.mode === 'REPLY'"
      :user="getUser"
      :text="formState.formText"
      :parent-id="post.id"
      @send="reply"
    >
      <template #form-button>
        {{ formState.mode }}
      </template>
    </ThePostForm>
    <div 
      v-if="children && children.length"
      class="the-post-children" 
    >
      <div class="separator" />
      <ThePost
        v-for="(child, i) in children"
        :key="`post_${post.id}_${i}`"
        v-model:likes="child.likes"
        :post="child"
        :children="getChildren(child.id)"
      />
    </div>
  </div>
  <ThePostDeletionModal
    v-if="isDeletingPost"
    @close="isDeletingPost = false"
    @confirm="onDeletePost"
  />
</template>

<script>
import { reactive, ref } from 'vue';
import { useUserStore } from '@/store/user.js';
import { usePostsStore } from '@/store/posts.js';
import { usePostTextFormatter } from '@/modules/home/composables/format-post-text';

import AppCard from '@/components/AppCard/AppCard.vue';
import AppLikeCounter from '@/components/AppLikeCounter/AppLikeCounter.vue';
import ThePostHeader from '@/modules/home/components/ThePostHeader/ThePostHeader.vue';
import ThePostActions from '@/modules/home/components/ThePostActions/ThePostActions.vue';
import ThePostForm from '@/modules/home/components/ThePostForm/ThePostForm.vue';
import ThePostLayout from '@/modules/home/layouts/ThePostLayout.vue';
import ThePostDeletionModal from '@/modules/home/components/ThePostDeletionModal/ThePostDeletionModal.vue';
import ThePostUpdateForm from '@/modules/home/components/ThePostUpdateForm/ThePostUpdateForm.vue';

export default {
  components: {
    AppCard,
    AppLikeCounter,
    ThePostHeader,
    ThePostForm,
    ThePostLayout,
    ThePostActions,
    ThePostDeletionModal,
    ThePostUpdateForm
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    children: {
      type: Array,
      default: null
    }
  },
  setup(props) {
    const userStore = useUserStore();
    const postsStore = usePostsStore();
    const isDeletingPost = ref(false);

    const formState = reactive({
      formText: '',
      mode: 'IDLE'
    });

    function resetForm() {
      formState.formText = '';
      formState.mode = 'IDLE';
    }

    function reply(post) {
      if (formState.mode === 'REPLY') {
        postsStore.addPost(post);
      } else if (formState.mode === 'UPDATE') {
        postsStore.editPost(post);
      }

      resetForm();
    }

    function onUpdate(postText) {
      postsStore.updatePost(props.post, postText);
      formState.mode = 'IDLE';
    }

    async function onDelete() {
      isDeletingPost.value = true;
    }

    function onEdit(post) {
      formState.formText = post.text;
      formState.mode = 'UPDATE';
    }

    function onReply() {
      formState.formText = `@${props.post.user.username} `;
      formState.mode = 'REPLY';
    }

    function onLike() {
      postsStore.likePost(props.post.id);
    }

    function onDislike() {
      postsStore.dislikePost(props.post.id);
    }

    function onDeletePost() {
      isDeletingPost.value = false;
      postsStore.deletePost(props.post.id);
    }

    return {
      formState,
      isDeletingPost,
      reply,
      onDelete,
      onEdit,
      onReply,
      onLike,
      onDislike,
      onUpdate,
      onDeletePost,
      getUser: userStore.getUser,
      getChildren: postsStore.getChildren,
      usePostTextFormatter
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
  max-width: 100%;
  row-gap: 16px;
}
.post-text {
  color: $neutral-medium;
  line-height: 120%;
}
.the-post-children {
  width: 100%;
  padding-left: 80px;
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;

  .separator {
    position: absolute;
    width: 2px;
    border-radius: 4px;
    background-color: $neutral-light;
    height: 100%;
    margin-left: -40px;
  }
}

@media screen and (max-width: 768px) {
  .the-post-children {
    padding-left: 24px;

    .separator {
      margin-left: -24px;
    }
  }
}
</style>
