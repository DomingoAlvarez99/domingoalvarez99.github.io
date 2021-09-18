<template>
  <v-footer
    class="font-weight-medium"
    color="primary darken-2"
  >
    <v-col
      class="text-center"
      cols="12"
    >
      <span class="footer-text">&copy; Copyright {{ new Date().getFullYear() }} — </span>
      <strong class="footer-text">Domingo Álvarez</strong>
    </v-col>
  </v-footer>
</template>

<style scoped>
  .footer-text {
    color: white;
  }
</style>