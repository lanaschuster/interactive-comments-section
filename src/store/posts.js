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
      text: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
      date: '1 month ago',
      likes: 12,
      status: PostStatus.IDLE,
      user: {
        avatar: '/images/image-amyrobson.png',
        username: 'amyrobson',
        isCurrent: false
      }
    }, {
      id: 2,
      parent: null,
      text: 'Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
      date: '2 weeks ago',
      likes: 5,
      status: PostStatus.IDLE,
      user: {
        avatar: '/images/image-maxblagun.png',
        username: 'maxblagun',
        isCurrent: false
      }
    },  {
      id: 3,
      parent: 2,
      text: '@maxblagun If you\'re still new, I\'d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It\'s very tempting to jump ahead but lay a solid foundation first.',
      date: '1 week ago',
      likes: 4,
      status: PostStatus.IDLE,
      user: {
        avatar: '/images/image-ramsesmiron.png',
        username: 'ramsesmiron',
        isCurrent: false
      }
    },   {
      id: 4,
      parent: 2,
      text: '@ramsesmiron I couldn\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
      date: '2 days ago',
      likes: 2,
      status: PostStatus.LIKED,
      user: {
        avatar: '/images/image-juliusomo.png',
        username: 'juliusomo',
        isCurrent: true
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
      post.status = PostStatus.IDLE;
      post.likes = 0;
      this.posts.push(post);
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id != id);
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
