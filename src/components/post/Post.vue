<template>
  <Page class="post" v-if="post">
    <template #title>
      <PostMetadata
        :createdAt="post.attributes.created_at"
        :updatedAt="post.attributes.updated_at"
      />
      <h1 class="mt-7 title">{{ post.attributes.title }}</h1>
      <Tags class="mt-7" :tags="post.attributes.tags" />
    </template>
    <template #content>
      <v-col cols="12">
        <component :is="post.vue.component"></component>
      </v-col>
    </template>
  </Page>
</template>

<script>
import Page from '@/components/shared/Page';
import PostMetadata from './shared/PostMetadata';
import Tags from './shared/Tags';
import { unescapeSlashes } from '@/mixins/utils';
import { findPost } from '@/mixins/post';

export default {
  components: {
    Page,
    PostMetadata,
    Tags,
  },
  data: () => ({
    post: null,
  }),
  methods: {
    sanitizeUrl(path) {
      return unescapeSlashes(path);
    },
  },
  created() {
    const url = this.sanitizeUrl(this.$route.params.name);

    findPost(url)
      .then((post) => {
        this.post = post;
        this.$root.$emit('update-title', this.post.attributes.title);
      })
      .catch(() => {
        this.$router.push({
          name: 'NotFound',
        });
      });
  },
};
</script>

<style lang="scss">
.markdown-body {
  h2,
  h3,
  h4,
  h5 {
    margin: 1.75em 0 1.25em !important;
  }
  p:empty {
    display: none;
  }
  p:last-child {
    margin-bottom: 0 !important;
  }
  p:not(:last-child) {
    margin-bottom: 1.75em !important;
  }
  p,
  li {
    line-height: 28px !important;
  }
  blockquote {
    background: #fdffb7;
    border-radius: 6px;
    padding: 1em;
    margin: 2.25em 0;

    p {
      opacity: 1;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  a {
    text-decoration: none;
    color: var(--v-accent-base);
  }
  a:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
