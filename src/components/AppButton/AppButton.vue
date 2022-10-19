<template>
  <button :class="[variant]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  }
};
</script>

<style lang="scss" scoped>
.primary {
  background-color: blue;
  color: white;
}
.secondary {
  background-color: grey;
  color: black;
}
.danger {
  background-color: red;
  color: white;
}
</style>
