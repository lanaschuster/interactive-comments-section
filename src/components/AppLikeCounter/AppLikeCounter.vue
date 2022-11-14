<template>
  <div class="app-like-counter">
    <i
      class="fa-solid fa-plus icon like"
      data-testid="plus"
      @click="like"
    />
    <span class="counter">
      {{ modelValue }}
    </span>
    <i
      class="fa-solid fa-minus icon dislike"
      data-testid="minus"
      @click="dislike"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const like = () => {
      emit('update:modelValue', props.modelValue+1);
    };

    const dislike = () => {
      emit('update:modelValue', props.modelValue-1);
    };

    return {
      like,
      dislike
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.app-like-counter {
  display: flex;
  border-radius: 8px;
  width: fit-content;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 12px;
  color: $primary;
  padding: 12px;
  box-sizing: border-box;
  font-family: $font-family;
  background-color: $neutral-light;
  font-weight: $font-weight-semibold;
  position: relative;
  height: fit-content;

  .icon {
    color: $secondary;
    cursor: pointer;

    &:hover {
      color: $primary;
    }
  }

  .like {
    margin-bottom: 16px;
  }
  .dislike {
    margin-top: 16px;
  }

  .counter {
    position: absolute;
  }
}

@media screen and (max-width: 768px) {
  .app-like-counter {
    flex-direction: row;

    .like {
      margin-bottom: 0;
      margin-right: 16px;
    }
    .dislike {
      margin-top: 0;
      margin-left: 16px;
    }
  }
}
</style>
