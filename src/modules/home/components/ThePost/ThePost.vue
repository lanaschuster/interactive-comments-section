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
    <div 
      v-if="children && children.length"
      class="the-post-children" 
    >
      <div class="separator" />
      <ThePost
        v-for="(child, i) in children"
        :key="`post_${post.id}_${i}`"
        :post="child"
        :children="getChildren(child.id)"
      />
    </div>
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
    },
    children: {
      type: Array,
      default: null
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
      getUser: userStore.getUser,
      getChildren: postsStore.getChildren
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
  row-gap: 8px;
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
