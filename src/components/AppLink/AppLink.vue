<template>
  <a 
    class="app-link"
    :href="href"
    :target="target"
    @click="$emit('click', true)"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: ''
    }
  },
  emits: ['click']
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.app-link {
  color: $primary;
  font-weight: $font-weight-semibold;
  text-decoration: none;
  font-family: $font-family;
  font-size: 16px;

  &:hover {
    color: $neutral-medium;
  }
}
</style>
