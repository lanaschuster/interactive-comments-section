<template>
  <div class="app-like-counter">
    <i
      class="fa-solid fa-plus icon like"
      :class="[status === 1 && 'selected']"
      data-testid="plus"
      @click="like"
    />
    <span class="counter">
      {{ likes }}
    </span>
    <i
      class="fa-solid fa-minus icon dislike"
      :class="[status === -1 && 'selected']"
      data-testid="minus"
      @click="dislike"
    />
  </div>
</template>

<script>
export default {
  props: {
    likes: {
      type: Number,
      default: 0
    },
    status: {
      type: Number,
      default: 0
    }
  },
  emits: ['like', 'dislike'],
  setup(props, { emit }) {
    const like = () => {
      emit('like',true);
    };

    const dislike = () => {
      emit('dislike', true);
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

  .selected {
    color: $primary;
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
