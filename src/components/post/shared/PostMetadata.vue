<template>
  <div class="metadata">
    <div class="d-flex">
      <div v-if="createdAt">
        <v-icon v-if="updatedAt" small>mdi-calendar-check</v-icon>
        <time :datetime="updatedAt">
          {{ formatPostDate(createdAt) }}
        </time>
      </div>
      <div v-if="updatedAt" class="ml-3">
        <v-icon small>mdi-sync</v-icon>
        <time :datetime="updatedAt">
          {{ formatPostDate(updatedAt) }}
        </time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['createdAt', 'updatedAt'],
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
.metadata {
  font-size: 1.05rem;
  opacity: 0.55 !important;

  time {
    font-family: 'Source Sans Pro', sans !important;
    font-weight: 400 !important;
  }
}
</style>
