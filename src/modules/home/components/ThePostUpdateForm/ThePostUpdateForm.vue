<template>
  <div class="the-post-update-form">
    <AppTextarea
      v-model="postText"
      data-testid="textarea"
      class="field"
    />
    <AppButton 
      data-testid="submit"
      class="button"
      @click="update"
    >
      UPDATE
    </AppButton>
  </div>
</template>

<script>
import { ref } from 'vue';
import AppTextarea from '@/components/AppTextarea/AppTextarea.vue';
import AppButton from '@/components/AppButton/AppButton.vue';

export default {
  components: {
    AppTextarea,
    AppButton
  },
  props: {
    postContent: {
      type: String,
      required: true
    }
  },
  emits: [ 'update:postText' ],
  setup(props, { emit }) {
    const postText = ref(props.postContent);

    function update() {
      emit('update:postText', postText.value);
    }

    return {
      postText,
      update
    };
  }
};
</script>

<style lang="scss" scoped>
.the-post-update-form {
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  align-items: flex-end;
}

@media screen and (max-width: 768px) {
  .the-post-update-form {
    margin: 16px 0;
  }
}
</style>
