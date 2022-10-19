<template>
  <section>
    <h1 class="title">
      Vue 3 + Webpack 5 Boilerplate
    </h1>
    <RandomPoetry />
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const RandomPoetry = defineAsyncComponent(() => import('../components/RandomPoetry/RandomPoetry.vue'));

export default {
  components: {
    RandomPoetry
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: blue;
}
</style>
