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
            @reply="onReply"
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
  </div>
</template>

<script>
import { computed } from 'vue';
import AppCard from '@/components/AppCard/AppCard.vue';
import AppLikeCounter from '@/components/AppLikeCounter/AppLikeCounter.vue';
import ThePostHeader from '@/modules/home/components/ThePostHeader/ThePostHeader.vue';

export default {
  components: {
    AppCard,
    AppLikeCounter,
    ThePostHeader
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
    const likes = computed({
      set: (value) => {
        emit('update:likes', value);
      },
      get: () => {
        return props.post.likes;
      }
    });

    function onReply() {
      // TODO
    }
    
    return {
      likes,
      onReply
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.the-post {
  display: flex;
  max-width: 768px;
}
.post-layout {
  display: flex;
  column-gap: 24px;

  .post-body {
    display: flex;
    flex-direction: column;

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
