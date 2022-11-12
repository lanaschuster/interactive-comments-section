import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      avatar: '/images/image-amyrobson.png',
      username: 'lanaschuster',
      isCurrent: true
    }
  }),
  getters: {
    getUser: (state) => state.user,
  }
});
