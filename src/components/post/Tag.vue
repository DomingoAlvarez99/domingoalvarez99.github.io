<template>
  <PostList :filter="filter">
    <template #title>
      <h1 class="title">
        Artículos sobre
        <span class="font-italic font-weight-bold">{{ tag }}</span>
      </h1>
    </template>
  </PostList>
</template>

<script>
import PostList from './shared/PostList';
import { resetAnimations } from '@/mixins/animation';

export default {
  components: {
    PostList,
  },
  data: () => ({
    filter: () => true,
  }),
  computed: {
    tag() {
      return this.$route.params.name;
    },
  },
  methods: {
    resetAnimations() {
      var elements = document.getElementsByClassName('animated');
      resetAnimations(Array.from(elements));
    },
    buildFilter(tag) {
      return (post) => post.attributes.tags.includes(tag);
    },
  },
  created() {
    this.filter = this.buildFilter(this.tag);
  },
  watch: {
    tag(newVal) {
      this.filter = this.buildFilter(newVal);
      this.resetAnimations();
      if (newVal) this.$root.$emit('update-title', newVal);
    },
  },
};
</script>
