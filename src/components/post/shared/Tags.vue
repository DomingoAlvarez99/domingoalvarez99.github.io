<template>
  <div v-if="tags.length" class="tags">
    <router-link
      class="mr-1 link"
      v-for="tag in tags"
      :key="tag"
      :to="{
        name: 'Tag',
        params: {
          name: tag,
        },
      }"
    >
      #{{ tag }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array,
  },
};
</script>

<style lang="scss" scoped>
.tags {
  margin-top: 1rem;
  font-size: 0.8rem;

  a {
    color: var(--v-accent-base) !important;
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8 !important;
  }
}
</style>
