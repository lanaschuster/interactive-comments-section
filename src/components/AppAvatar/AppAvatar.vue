<template>
  <img 
    :class="[variant]" 
    v-bind="{...$attrs}"
  >
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium'].includes(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 500px;
}
.small {
  width: 2rem;
}
.medium {
  width: 2.8rem;
}
</style>
