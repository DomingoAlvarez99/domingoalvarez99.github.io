<template>
  <div v-if="post" class="post-summary">
    <div class="header mb-1">
      <PostMetadata
        :createdAt="post.attributes.created_at"
        :updatedAt="post.attributes.updated_at"
      />
      <h2 class="mt-1 mb-2">
        <router-link
          class="link"
          :to="{
            name: 'Post',
            params: {
              name: post.path,
            },
          }"
          >{{ post.attributes.title }}</router-link
        >
      </h2>
    </div>
    <div>
      <div class="description" v-if="post.attributes.description">
        {{ post.attributes.description }}
      </div>
    </div>
    <Tags :tags="post.attributes.tags" />
  </div>
</template>

<script>
import PostMetadata from './PostMetadata';
import Tags from './Tags';

export default {
  components: {
    PostMetadata,
    Tags,
  },
  props: {
    post: Object,
  },
  data: () => ({
    dateOptions: { year: 'numeric', month: 'short', day: 'numeric' },
  }),
  methods: {
    formatDate(date, options) {
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    formatPostDate(date) {
      return this.formatDate(date, this.dateOptions);
    },
  },
};
</script>

<style lang="scss" scoped>
.post-summary {
  a {
    text-decoration: none;
  }

  .header {
    a {
      color: inherit;
    }
    h2 {
      padding: 0.5rem 0 0.25rem;
      font-size: 1.75rem !important;
    }
    h2 a {
      font-weight: 600 !important;
    }
  }

  .description {
    font-size: 1.05rem;
    opacity: 0.8;
  }
}
</style>
