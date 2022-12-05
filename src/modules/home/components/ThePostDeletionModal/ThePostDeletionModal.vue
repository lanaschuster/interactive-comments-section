<template>
  <AppModal>
    <template #title>
      Delete comment
    </template>
    <template #content>
      <p>
        Are you sure you want to delete this comment? This will remove the comment and can't be undone.
      </p>
    </template>
    <template #actions>
      <AppButton 
        variant="secondary"
        data-testid="cancelBtn"
        @click="$emit('close', true)"
      >
        NO, CANCEL
      </AppButton>
      <AppButton 
        variant="danger"
        data-testid="deleteBtn"
        @click="$emit('confirm', postId)"
      >
        YES, DELETE
      </AppButton>
    </template>
  </AppModal>
</template>

<script>
import AppButton from '@/components/AppButton/AppButton.vue';
import AppModal from '@/components/AppModal/AppModal.vue';

export default {
  components: {
    AppButton,
    AppModal
  },
  emits: [
    'close',
    'confirm'
  ]
};
</script>
