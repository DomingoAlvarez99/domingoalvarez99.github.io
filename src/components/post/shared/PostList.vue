<template>
  <Page :title="title">
    <template #title><slot name="title" /></template>
    <template #content>
      <v-col cols="12">
        <PostPagination :posts="posts">
          <template v-slot="slotProps">
            <PostSummary :post="slotProps.post" />
          </template>
        </PostPagination>
      </v-col>
    </template>
  </Page>
</template>

<script>
import { posts as rawPosts } from '@/mixins/post';
import PostSummary from './PostSummary';
import PostPagination from './PostPagination';
import Page from '@/components/shared/Page';

export default {
  components: {
    PostSummary,
    PostPagination,
    Page,
  },
  props: {
    title: String,
    filter: {
      type: Function,
      default: () => true,
    },
    sort: {
      type: Function,
      default: (post1, post2) => {
        let post1Date = new Date(post1.attributes.created_at).getTime();
        let post2Date = new Date(post2.attributes.created_at).getTime();

        return post2Date - post1Date;
      },
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    setPosts(filter) {
      rawPosts.then((value) => {
        const posts = value
          .filter(filter)
          .map((post) => {
            delete post.vue;
            return {
              ...post,
            };
          })
          .sort(this.sort);

        if (posts.length === 0)
          this.$router.push({
            name: 'NotFound',
          });
        this.posts = posts;
      });
    },
  },
  created() {
    this.setPosts(this.filter);
  },
  watch: {
    filter(newVal) {
      this.setPosts(newVal);
    },
  },
};
</script>
