<template>
  <div class="app-like-counter">
    <i
      class="fa-solid fa-plus icon like"
      data-testid="plus"
      @click="like"
    />
    <span class="counter">
      {{ counter }}
    </span>
    <i
      class="fa-solid fa-minus icon dislike"
      data-testid="minus"
      @click="dislike"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);

    const like = () => {
      counter.value++;
    };

    const dislike = () => {
      counter.value--;
    };

    return {
      counter,
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
</style>
