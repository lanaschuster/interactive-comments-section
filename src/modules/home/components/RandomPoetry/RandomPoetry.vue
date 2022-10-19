<template>
  <div>
    <h2 data-testid="title">
      {{ poetry.title }}
    </h2>
    <h3 data-testid="author">
      {{ poetry.author }}
    </h3>
    <p class="poetry">
      <span
        v-for="(line, i) in poetry.text"
        :key="`line_${i}`"
        data-testid="line"
      >
        {{ line }}
      </span>
    </p>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { findAllTitles, findByTitle } from '@/modules/home/services/poetry-service';

export default {
  setup() {
    const poetry = reactive({
      author: '',
      text: '',
      title: ''
    });

    const getRandomPoetry = async () => {
      const titles = await findAllTitles();
      const random = Math.floor(Math.random() * titles.length);
      const selectedTitle = titles[random];
      const poem = await findByTitle(selectedTitle);

      poetry.title = poem.title;
      poetry.author = poem.author;
      poetry.text = poem.lines;
    };

    onMounted(() => {
      getRandomPoetry();
    });

    return {
      poetry
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.poetry {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2px;
}
</style>
