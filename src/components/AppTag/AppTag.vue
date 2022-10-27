<template>
  <span class="app-tag">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.app-tag {
  color: $white;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 2px;
  width: fit-content;
  font-family: $font-family;
  background-color: $primary;
  font-weight: $font-weight-semibold;
}
</style>
