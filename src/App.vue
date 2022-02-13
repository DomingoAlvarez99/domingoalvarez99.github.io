<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer v-show="updated" />
    <Title :value="title" />
  </v-app>
</template>

<script>
import Title from '@/components/Title.vue';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Title,
  },
  data() {
    return {
      updated: false,
    };
  },
  updated() {
    this.updated = true;
  },
  computed: {
    title() {
      return 'Portfolio';
    },
  },
};
</script>

<style>
@import './assets/css/style.css';
</style>
