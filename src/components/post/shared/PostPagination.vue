<template>
  <div v-if="posts.length > 0" class="pagination">
    <div class="content">
      <div v-for="(post, idx) in paginatedPosts" :key="`post-${idx}`">
        <slot :position="idx" :post="post" :pageSize="paginatedPosts.length" />
        <v-divider class="divider" />
      </div>
    </div>
    <div
      v-if="
        displayPagination &&
        posts.length > paginatedPosts.length &&
        paginatedPosts.length > 0
      "
      class="footer"
    >
      <button class="mr-2 link" @click="prevPage" :disabled="page <= 0">
        <i></i>
        Artículos recientes
      </button>
      <button
        class="ml-2 link"
        @click="nextPage"
        :disabled="limit >= posts.length"
      >
        Artículos anteriores
        <i class="right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
    pageSize: {
      type: Number,
      default: 2,
    },
  },
  data: () => ({
    page: 0,
    displayPagination: true,
  }),
  methods: {
    prevPage() {
      this.page--;
    },
    nextPage() {
      this.page++;
    },
    setDefaultPage() {
      const page = this.$route.query.page;

      if (page) this.page = page;
    },
    onHidePaginationEvent() {
      this.$root.$on('hide-pagination', () => {
        this.displayPagination = false;
      });
    },
  },
  created() {
    this.setDefaultPage();
    this.onHidePaginationEvent();
  },
  computed: {
    paginatedPosts() {
      return this.posts.slice(this.offset, this.limit);
    },
    limit() {
      return this.offset + this.pageSize;
    },
    offset() {
      return this.pageSize * this.page;
    },
  },
  watch: {
    page(newVal) {
      if (newVal === this.$route.query.page) return;

      this.$router.push({
        name: this.$route.name,
        query: {
          page: newVal,
        },
      });
    },
    paginatedPosts(newVal) {
      if (this.posts.length > 0 && newVal.length === 0) {
        this.$router
          .push({
            name: 'NotFound',
          })
          .catch((error) => {
            if (error.name != 'NavigationDuplicated') {
              throw error;
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  .content div:not(:first-child) {
    padding-top: 1.75rem;
  }
  .content div {
    .divider {
      margin-top: 1.75rem;
    }
  }
  .content div:last-child .divider {
    display: none;
  }
  .footer {
    color: var(--v-accent-base) !important;
    margin-top: 1.5rem;
    justify-content: center;
    display: flex;

    button {
      background: none;
      color: inherit;
      border: none;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      padding: 8px;
      font-weight: bold;
    }

    button:hover:not([disabled]) {
      opacity: 0.8 !important;
    }

    button:disabled,
    button[disabled] {
      opacity: 0.4 !important;
    }

    span {
      margin-left: 3px;
    }

    i {
      border: solid;
      border-width: 0 2px 2px 0;
      display: inline-block;
      margin: 0 5px;
      padding: 4px;
      transform: rotate(135deg);
    }

    .right {
      transform: rotate(-45deg);
    }
  }
}
</style>
