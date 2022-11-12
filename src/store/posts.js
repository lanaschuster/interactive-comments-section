import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [{
      id: 1,
      parent: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ex et tortor euismod cursus eget commodo lacus. In varius feugiat ante. In tellus felis, consectetur ut euismod sed, bibendum ac ipsum. Duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. Fusce sem nisi, hendrerit ac euismod nec, porttitor ut quam. Sed venenatis tincidunt nunc quis scelerisque.',
      date: '1 month ago',
      likes: 10,
      user: {
        avatar: '/images/image-juliusomo.png',
        username: 'juliusomo',
        isCurrent: false
      }
    }, {
      id: 2,
      parent: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ex et tortor euismod cursus eget commodo lacus. In varius feugiat ante. In tellus felis, consectetur ut euismod sed, bibendum ac ipsum. Duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. Fusce sem nisi, hendrerit ac euismod nec, porttitor ut quam. Sed venenatis tincidunt nunc quis scelerisque.',
      date: '1 month ago',
      likes: 2,
      user: {
        avatar: '/images/image-amyrobson.png',
        username: 'lanaschuster',
        isCurrent: true
      }
    },  {
      id: 3,
      parent: null,
      text: 'Lorem ipsum dolor sit amet.',
      date: '2 months ago',
      likes: -1,
      user: {
        avatar: '/images/image-ramsesmiron.png',
        username: 'ramsesmiron',
        isCurrent: false
      }
    }]
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    addPost(post) {
      post.id = Math.floor(Math.random() * 101) + 3;
      this.posts.push(post);
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id != id);
    },
    editPost(editedPost) {
      const post = this.posts.find(post => post.id === editedPost.id);
      post.text = editedPost.text;
    },
    getChildren(id) {
      return this.posts.filter(post => post.parent.id === id);
    },
    getPost(id) {
      return this.posts.find(post => post.id === id);
    }
  }
});
