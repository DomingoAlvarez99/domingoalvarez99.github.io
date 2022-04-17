<template>
  <v-app-bar height="80px" elevate-on-scroll app fixed class="primary darken-2">
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="d-flex" cols="10">
          <v-btn
            to="/"
            icon
            :ripple="false"
            elevation="0"
            class="transparent-button size-auto"
          >
            <v-avatar class="align-self-center" size="56">
              <img
                class="avatar"
                :src="require('@/assets/imgs/profile.jpeg')"
                :alt="username"
              />
            </v-avatar>
          </v-btn>
          <div class="ml-4 align-self-center">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="main-text nav-text text-h6">{{
                  name
                }}</v-list-item-title>
                <v-list-item-subtitle
                  class="job nav-text nav-sub-text text-uppercase"
                  >{{ job }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-col>
        <v-col cols="2" align="end">
          <v-app-bar-nav-icon
            icon
            :ripple="false"
            elevation="0"
            class="transparent-button size-auto"
            @click="onNavIconClick()"
          >
            <v-icon class="link-icon nav-text nav-sub-text">mdi-menu</v-icon>
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { items } from '@/mixins/nav';
import { username, name, job } from '@/data/about-me.json';
export default {
  data() {
    return {
      navItems: items,
      username: username,
      name: name,
      job: job,
    };
  },
  methods: {
    onNavIconClick() {
      this.$root.$emit('nav-icon-click');
    },
  },
};
</script>
