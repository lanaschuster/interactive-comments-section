import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      avatar: '/images/image-juliusomo.png',
      username: 'juliusomo',
      isCurrent: true
    }
  }),
  getters: {
    getUser: (state) => state.user,
  }
});
