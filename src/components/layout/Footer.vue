<template>
  <v-footer inset app absolute color="primary darken-2">
    <v-col class="footer-text text-center" cols="12">
      <span class="footer-sub-text">&copy; Copyright {{ currentYear }} — </span>
      <span class="font-weight-bold">{{ username }}</span>
    </v-col>
  </v-footer>
</template>

<script>
import { username } from '@/data/about-me.json';

export default {
  data() {
    return {
      username: username,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer-text {
  color: white;
}
.footer-sub-text {
  opacity: 0.75 !important;
}
</style>
