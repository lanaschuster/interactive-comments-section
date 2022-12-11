import { defineStore } from 'pinia';

function sanitize(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };
  const reg = /[&<>]/ig;
  return string.replace(reg, match => map[match]);
}

const PostStatus = {
  'DISLIKED': -1,
  'IDLE': 0,
  'LIKED': 1,
};

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [{
      id: 1,
      parent: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ex et tortor euismod cursus eget commodo lacus. In varius feugiat ante. In tellus felis, consectetur ut euismod sed, bibendum ac ipsum. Duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. Fusce sem nisi, hendrerit ac euismod nec, porttitor ut quam. Sed venenatis tincidunt nunc quis scelerisque.',
      date: '1 month ago',
      likes: 10,
      status: PostStatus.IDLE,
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
      status: PostStatus.IDLE,
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
      status: PostStatus.DISLIKED,
      user: {
        avatar: '/images/image-ramsesmiron.png',
        username: 'ramsesmiron',
        isCurrent: false
      }
    },   {
      id: 4,
      parent: 1,
      text: '@juliusomo, duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. @lanaschuster @juliusomo',
      date: '2 days ago',
      likes: 1,
      status: PostStatus.LIKED,
      user: {
        avatar: '/images/image-ramsesmiron.png',
        username: 'ramsesmiron',
        isCurrent: false
      }
    }]
  }),
  getters: {
    getPosts: (state) => state.posts.filter(post => post.parent === null),
  },
  actions: {
    addPost(post) {
      post.id = Math.floor(Math.random() * 101) + 3;
      post.text = sanitize(post.text);
      this.posts.push(post);
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id != id);
    },
    editPost(editedPost) {
      const post = this.posts.find(post => post.id === editedPost.id);
      post.text = sanitize(editedPost.text);
    },
    getChildren(id) {
      return this.posts.filter(post => post.parent === id);
    },
    getPost(id) {
      return this.posts.find(post => post.id === id);
    },
    likePost(id) {
      const post = this.posts.find(post => post.id === id);

      if (post.status === PostStatus.DISLIKED) { 
        post.status = PostStatus.IDLE;
        post.likes++;
      } else if (post.status === PostStatus.IDLE) {
        post.status = PostStatus.LIKED;
        post.likes++;
      }
    },
    dislikePost(id) {
      const post = this.posts.find(post => post.id === id);

      if (post.status === PostStatus.LIKED) {
        post.status = PostStatus.IDLE;
        post.likes--;
      } else if (post.status === PostStatus.IDLE) {
        post.status = PostStatus.DISLIKED;
        post.likes--;
      }
    },
    updatePost(editedPost, text) {
      const post = this.posts.find(post => post.id === editedPost.id);
      post.text = sanitize(text);
    }
  }
});
