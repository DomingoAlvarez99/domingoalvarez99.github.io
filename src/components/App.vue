<template>
  <v-app>
    <AppBar v-if="smallDevice" />
    <Sidebar :smallDevice="smallDevice" />
    <v-main>
      <router-view />
    </v-main>
    <Footer v-show="updated" />
    <Title :value="title" />
  </v-app>
</template>

<script>
import Title from '@/components/Title.vue';
import AppBar from '@/components/layout/AppBar';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';

export default {
  name: 'App',
  components: {
    AppBar,
    Footer,
    Sidebar,
    Title,
  },
  data() {
    return {
      updated: false,
      title: '',
    };
  },
  updated() {
    this.updated = true;
  },
  created() {
    this.onTitleUpdatedEvent();
  },
  methods: {
    onTitleUpdatedEvent() {
      this.$root.$on('update-title', (newTitle) => {
        this.setTitle(newTitle);
      });
    },
    setTitle(newTitle) {
      this.title = newTitle
        ? `${newTitle} - DomingoAlvarez99`
        : 'DomingoAlvarez99';
    },
  },
  watch: {
    metaTitle(newTitle) {
      if (newTitle) this.setTitle(this.$route.meta.title);
    },
  },
  computed: {
    metaTitle() {
      return this.$route.meta.title;
    },
    smallDevice() {
      return !this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>

<style>
@import '../assets/css/style.css';
</style>
