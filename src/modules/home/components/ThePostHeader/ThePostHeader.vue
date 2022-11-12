<template>
  <div class="post-header">
    <div class="post-header-details">
      <AppUser
        data-testid="user"
        :avatar="post.user.avatar"
        :username="post.user.username"
        :is-current-user="post.user.isCurrent"
      />
      <span class="post-date">{{ post.date }}</span>
    </div>
    <div class="post-actions">
      <AppButton
        v-if="!post.user.isCurrent"
        type="text"
        data-testid="reply"
        @click="$emit('reply', true)"
      >
        <i class="fa-solid fa-reply" /> Reply
      </AppButton>
      <AppButton
        v-if="post.user.isCurrent"
        type="text"
        variant="danger"
        data-testid="delete"
        @click="$emit('delete', true)"
      >
        <i class="fa-solid fa-trash" /> Delete
      </AppButton>
      <AppButton
        v-if="post.user.isCurrent"
        type="text"
        data-testid="edit"
        @click="$emit('edit', true)"
      >
        <i class="fa-solid fa-pencil" /> Edit
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppUser from '@/components/AppUser/AppUser.vue';
import AppButton from '@/components/AppButton/AppButton.vue';

export default {
  components: {
    AppUser,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  emits: [
    'reply',
    'delete',
    'edit'
  ],
};
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

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

  .post-actions {
    display: flex;
    column-gap: 4px;
  }
}
</style>
