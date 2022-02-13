<template>
  <v-footer class="font-weight-medium" color="primary darken-2">
    <v-col class="text-center" cols="12">
      <span class="footer-text">&copy; Copyright {{ currentYear }} — </span>
      <strong class="footer-text">Domingo Álvarez</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer-text {
  color: white;
}
</style>
