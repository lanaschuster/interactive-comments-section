<template>
  <textarea 
    v-bind="{ ...$attrs }"
    v-model="model"
  />
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const model = computed({
      set: (value) => {
        emit('update:modelValue', value);
      },
      get: () => {
        return props.modelValue;
      }
    });

    return {
      model
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

textarea {
  width: 100%;
  border-radius: 8px;
  padding: 16px 24px;
  box-sizing: border-box;
  border: 1px solid $primary;
  font-size: $font-size-paragraph;
}
</style>
