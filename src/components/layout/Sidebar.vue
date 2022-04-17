<template>
  <v-navigation-drawer
    :width="!smallDevice ? 290 : '100%'"
    class="drawer primary darken-2"
    v-model="drawer"
    app
    :permanent="!smallDevice"
    fixed
  >
    <v-btn
      v-if="smallDevice"
      icon
      :ripple="false"
      elevation="0"
      class="link-btn close-btn transparent-button size-auto"
    >
      <v-icon
        class="link-btn nav-text nav-sub-text"
        @click="toggleDrawer()"
        medium
        >mdi-close</v-icon
      >
    </v-btn>
    <v-list-item v-if="!smallDevice" class="text-center">
      <v-list-item-content>
        <v-avatar size="128">
          <img
            class="avatar"
            :src="require('@/assets/imgs/profile.jpeg')"
            :alt="username"
          />
        </v-avatar>
        <v-list-item-title class="nav-text mt-10 text-h5">{{
          name
        }}</v-list-item-title>
        <v-list-item-subtitle
          class="mt-1 nav-text nav-sub-text text-uppercase"
          >{{ job }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-list class="mt-5" dense nav>
      <v-list-item-group align="center">
        <template v-for="(item, index) in navItems">
          <v-divider
            class="nav-border"
            v-if="index === 0"
            :key="`${index}-top-divider`"
          ></v-divider>
          <v-list-item
            :to="item.path"
            :ripple="false"
            class="my-2"
            :key="index"
          >
            <v-list-item-title
              class="nav-text nav-sub-text nav-item-title link"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item>
          <v-divider
            class="nav-border"
            :key="`${index}-bottom-divider`"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <div class="text-center mt-5">
      <v-btn
        :ripple="false"
        v-for="item in socials"
        :key="item.icon"
        class="link-btn transparent-button social-btn nav-border ma-2"
        fab
        outlined
        :href="item.link"
        target="_blank"
      >
        <v-icon class="link-icon nav-text nav-sub-text">
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import {
  username,
  name,
  job,
  github,
  linkedin,
  mail,
} from '@/data/about-me.json';
import { items } from '@/mixins/nav';

export default {
  props: {
    smallDevice: Boolean,
  },
  data() {
    return {
      navItems: items,
      username: username,
      name: name,
      job: job,
      socials: [
        {
          icon: 'mdi-github',
          color: 'white',
          link: github,
        },
        {
          icon: 'mdi-linkedin',
          color: 'white',
          link: linkedin,
        },
        {
          icon: 'mdi-gmail',
          color: 'white',
          link: `mailto:${mail}`,
        },
      ],
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  created() {
    this.$root.$on('nav-icon-click', () => {
      this.toggleDrawer();
    });
  },
};
</script>

<style scoped>
.drawer {
  padding: 3.75rem 1.5em;
}
.nav-item-title {
  font-size: 95% !important;
}
.v-list-item:hover::before,
.v-list-item--active:hover::before,
.v-list-item--active::before {
  opacity: 0;
}
.close-btn {
  position: absolute;
  top: 27px;
  right: 30px;
}
</style>
