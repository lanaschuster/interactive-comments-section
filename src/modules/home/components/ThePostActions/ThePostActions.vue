<template>
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
      @click="$emit('delete', post.id)"
    >
      <i class="fa-solid fa-trash" /> Delete
    </AppButton>
    <AppButton
      v-if="post.user.isCurrent"
      type="text"
      data-testid="edit"
      @click="$emit('edit', post)"
    >
      <i class="fa-solid fa-pencil" /> Edit
    </AppButton>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton/AppButton.vue';

export default {
  components: {
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
  ]
};
</script>