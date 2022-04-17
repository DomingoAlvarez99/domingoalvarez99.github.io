<template>
  <PostList class="not-found">
    <template #title>
      <div class="header">
        <h1>Oops!</h1>
        <h2>No hemos podido encontrar la página que buscas.</h2>
        <h3>Pero.. ¡Aquí tienes los últimos artículos!</h3>
      </div>
    </template>
  </PostList>
</template>

<script>
import PostList from '@/components/post/shared/PostList';

export default {
  components: {
    PostList,
  },
  mounted() {
    this.$root.$emit('hide-pagination');
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  .header {
    opacity: 0.75;
    text-align: center;

    h1 {
      font-size: 6rem !important;
      text-shadow: 6px 6px 12px rgb(0 0 0 / 40%);
    }
    @media only screen and (max-width: 950px) {
      h1 {
        text-shadow: 4px 4px 8px rgb(0 0 0 / 40%);
        font-size: 4rem !important;
      }
    }
    h3 {
      margin-top: 0.5rem;
      font-weight: 600 !important;
    }
  }
}
</style>
