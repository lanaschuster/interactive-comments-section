<template>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  background-color: $neutral-lightest;
}
* {
  font-family: $font-family;
  font-weight: $font-weight-regular;
}
</style>
