<template>
  <div class="post-layout">
    <div class="post-side">
      <slot name="side" />
    </div>
    <div class="post-header">
      <slot name="header" />
    </div>
    <div class="post-actions">
      <slot name="actions" />
    </div>
    <div class="post-body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.post-layout {
  display: grid;
  grid-template-areas: 
    'side head actions'
    'side body body';
  grid-template-columns: max-content auto auto;
  column-gap: 24px;

  .post-side {
    grid-area: side;
  }

  .post-header {
    grid-area: head;
  }

  .post-actions {
    grid-area: actions;
    display: flex;
    justify-content: flex-end;
  }

  .post-body {
    grid-area: body;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .post-layout {
    display: grid;
    grid-template-areas: 
      'head head head'
      'body body body'
      'side actions actions';
    grid-template-columns: auto auto auto;
  }
}
</style>
