<template>
  <teleport to="body">
    <div class="app-modal">
      <AppCard
        class="app-modal-container"
        data-testid="card"
      >
        <div 
          class="app-modal-title" 
          data-testid="title"
        >
          <slot name="title" />
        </div>
        <div 
          class="app-modal-content"
          data-testid="content"
        >
          <slot name="content" />
        </div>
        <div
          class="app-modal-actions"
          data-testid="actions"  
        >
          <slot name="actions" />
        </div>
      </AppCard>
    </div>
  </teleport>
</template>

<script>
import AppCard from '@/components/AppCard/AppCard.vue';

export default {
  components: {
    AppCard
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.app-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($black, 0.6);

  .app-modal-title {
    font-size: 24px;
    font-weight: $font-weight-semibold;
  }

  .app-modal-container {
    max-width: 340px;
  }

  .app-modal-content {
    color: $neutral-medium;
    font-size: $font-size-paragraph;
  }

  .app-modal-actions {
    display: flex;
    column-gap: 16px;
  }
}
@media screen and (max-width: 425px) {
  .app-modal {
    .app-modal-container {
      max-width: 90%;
    }
  }
}
</style>
