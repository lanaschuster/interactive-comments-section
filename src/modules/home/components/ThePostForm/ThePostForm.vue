<template>
  <AppCard class="post-form">
    <div class="post-form-layout">
      <AppAvatar
        :src="user.avatar"
        variant="small"
        data-testid="avatar"
        class="avatar"
      />
      <AppTextarea
        v-model="message"
        data-testid="textarea"
        class="field"
      />
      <AppButton 
        data-testid="submit"
        class="button"
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
  display: grid;
  column-gap: 16px;
  grid-template-areas: 'avatar field button';
  grid-template-columns: max-content auto max-content;
  
  .avatar {
    grid-area: avatar;
  }

  .field {
    grid-area: field;
  }

  .button {
    grid-area: button;
  }
}
@media screen and (max-width: 768px) {
  .post-form-layout {
    row-gap: 16px;
    grid-template-areas: 
      'field field'
      'avatar button';
    grid-template-columns: auto min-content;
  }
}
</style>
