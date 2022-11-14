<template>
  <AppCard class="post-form">
    <div class="post-form-layout">
      <AppAvatar
        :src="user.avatar"
        variant="small"
        data-testid="avatar"
      />
      <AppTextarea
        v-model="message"
        data-testid="textarea"
      />
      <AppButton 
        data-testid="submit"
        @click="send"
      >
        <slot name="form-button" />
      </AppButton>
    </div>
  </AppCard>
</template>

<script>
import { ref } from 'vue';
import AppCard from '@/components/AppCard/AppCard.vue';
import AppAvatar from '@/components/AppAvatar/AppAvatar.vue';
import AppTextarea from '@/components/AppTextarea/AppTextarea.vue';
import AppButton from '@/components/AppButton/AppButton.vue';

export default {
  components: {
    AppCard,
    AppAvatar,
    AppTextarea,
    AppButton
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    parentId: {
      type: Number,
      default: null
    },
    postId: {
      type: Number,
      default: null
    }
  },
  emits: ['send'],
  setup(props, { emit }) {
    const message = ref(props.text);

    function send() {
      const post = {
        id: props.postId ?? undefined,
        text: message.value,
        user: props.user,
        parent: props.parentId
      };

      emit('send', post);
      message.value = '';
    }

    return {
      message,
      send
    };
  }
};
</script>

<style lang="scss" scoped>
.post-form {
  width: 100%;
  max-width: 768px;
}
.post-form-layout {
  display: flex;
  column-gap: 16px;
}
</style>
