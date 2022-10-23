<template>
  <div class="appcard">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.appcard {
  padding: 24px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: $white;
  font-family: $font-family;
  font-size: $font-size-paragraph;
  font-weight: $font-weight-regular;
  box-shadow: $neutral-light 0px 1px 3px 0px, $neutral-light 0px 1px 2px 0px;
}
</style>
