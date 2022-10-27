<template>
  <div class="app-user">
    <AppAvatar
      :src="avatar" 
      variant="small"
      data-testid="avatar"
    />
    <div class="app-user-labels">
      <label data-testid="username">{{ username }}</label>
      <AppTag
        v-if="isCurrentUser" 
        data-testid="tag"
      >
        you
      </AppTag>
    </div>
  </div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar/AppAvatar.vue';
import AppTag from '@/components/AppTag/AppTag.vue';

export default {
  components: {
    AppAvatar,
    AppTag
  },
  props: {
    avatar: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: 'Anonymous'
    },
    isCurrentUser: {
      type: Boolean,
      default: false
    },
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.app-user {
  display: flex;
  align-items: center;
  column-gap: 16px;

  .app-user-labels {
    display: flex;
    align-items: center;
    column-gap: 8px;

    label {
      font-family: $font-family;
      font-weight: $font-weight-semibold;
      font-size: $font-size-paragraph;
    }
  }
}
</style>
