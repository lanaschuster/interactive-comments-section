<template>
  <section>
    <ThePost
      v-for="(post, i) in posts"
      :key="`post_${i}`"
      v-model:likes="post.likes"
      :post="post"
    />
  </section>
</template>

<script>
import { reactive } from 'vue';
import ThePost from '@/modules/home/components/ThePost/ThePost.vue';

export default {
  components: {
    ThePost
  },
  setup() {
    const posts = reactive([{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ex et tortor euismod cursus eget commodo lacus. In varius feugiat ante. In tellus felis, consectetur ut euismod sed, bibendum ac ipsum. Duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. Fusce sem nisi, hendrerit ac euismod nec, porttitor ut quam. Sed venenatis tincidunt nunc quis scelerisque.',
      date: '1 month ago',
      likes: 10,
      user: {
        avatar: '/images/image-amyrobson.png',
        username: 'lanaschuster',
        isCurrent: false
      }
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ex et tortor euismod cursus eget commodo lacus. In varius feugiat ante. In tellus felis, consectetur ut euismod sed, bibendum ac ipsum. Duis aliquam, erat a pellentesque rhoncus, purus est tristique nisi, et convallis tortor magna vel elit. Nam ac mauris neque. Fusce sem nisi, hendrerit ac euismod nec, porttitor ut quam. Sed venenatis tincidunt nunc quis scelerisque.',
      date: '1 month ago',
      likes: 2,
      user: {
        avatar: '/images/image-amyrobson.png',
        username: 'luizcarlos',
        isCurrent: true
      }
    }]);

    return {
      posts
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  row-gap: 24px;
}
</style>
