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
  </div>
</template>

<script>
import AppUser from '@/components/AppUser/AppUser.vue';

export default {
  components: {
    AppUser
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
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
