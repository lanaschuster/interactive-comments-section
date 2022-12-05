<template>
  <button :class="[ buttonClass ]">
    <div class="flex-wrapper">
      <slot />
    </div>
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'danger'].includes(value);
      }
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'text'].includes(value);
      }
    }
  },
  setup(props) {
    const buttonClass = computed(() => {
      return `appbutton ${props.variant} ${props.type}`;
    });

    return {
      buttonClass
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.appbutton {
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  padding: 12px 24px;
  box-sizing: border-box;
  font-family: $font-family;
  border: 1px solid transparent;
  font-weight: $font-weight-semibold;
  max-height: 48px;

  .flex-wrapper {
    display: flex;
    column-gap: 4px;
  }
}
.primary {
  color: $white;
  background-color: $primary;

  &:hover {
    background-color: $secondary;
  }
  &:active {
    border-color: $primary;
  }

  &.text {
    background-color: transparent;
    color: $primary;
    &:hover {
      color: $secondary;
    }
  }
}
.danger {
  color: $white;
  background-color: $danger-medium;

  &:hover {
    background-color: $danger-light;
  }
  &:active {
    border-color: $danger-medium;
  }

  &.text {
    background-color: transparent;
    color: $danger-medium;
    &:hover {
      color: $danger-light;
    }
  }
}
.secondary {
  color: $white;
  background-color: $neutral-medium;

  &:hover {
    background-color: $neutral-medium-light;
  }
  &:active {
    border-color: $neutral-medium;
  }

  &.text {
    background-color: transparent;
    color: $neutral-medium;
    &:hover {
      color: $neutral-medium-light;
    }
  }
}
</style>
