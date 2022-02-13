<template>
  <v-app-bar app :flat="!sticky" :absolute="!sticky" :color="color">
    <v-container>
      <v-row justify="center">
        <v-toolbar-items>
          <v-btn
            v-for="item in items"
            :key="item.reference"
            class="pa-3 font-weight-bold"
            :class="activeClassItem == item.reference ? 'active' : ''"
            :x-small="$vuetify.breakpoint.smAndDown"
            @click="$vuetify.goTo(`#${item.reference}`, options)"
            :color="activeClassItem == item.reference ? 'primary' : 'white'"
            text
          >
            <v-icon v-if="item.isIcon" small>{{ item.icon }}</v-icon>
            {{ !item.icon ? item.title : '' }}
          </v-btn>
        </v-toolbar-items>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { reference: 'app', title: '', isIcon: true, icon: 'mdi-home' },
        { reference: 'about', title: 'SOBRE MÍ', isIcon: false },
        { reference: 'services', title: 'Servicios', isIcon: false },
        { reference: 'portfolio', title: 'Portfolio', isIcon: false },
      ],
      options: {
        duration: 1400,
        easing: 'easeInOutCubic',
      },
      sticky: false,
      color: 'primary',
      activeClassItem: '',
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    getActiveClass(aboutElement, servicesElement, portfolioElement) {
      if (
        Math.round(window.scrollY) + 10 >= aboutElement.offsetTop &&
        Math.round(window.scrollY) + 10 < servicesElement.offsetTop
      )
        return 'about';

      if (
        Math.round(window.scrollY) + 10 >= servicesElement.offsetTop &&
        Math.round(window.scrollY) + 10 < portfolioElement.offsetTop
      )
        return 'services';

      return 'portfolio';
    },
    handleScroll() {
      var aboutElement = document.getElementById('about');
      var servicesElement = document.getElementById('services');
      var portfolioElement = document.getElementById('portfolio');

      if (window.scrollY < aboutElement.offsetTop - 10) {
        this.activeClassItem = '';
        this.sticky = false;
        this.color = 'primary';

        return;
      }

      this.activeClassItem = this.getActiveClass(
        aboutElement,
        servicesElement,
        portfolioElement
      );

      this.sticky = true;
      this.color = 'primary darken-2';
    },
  },
};
</script>

<style scoped>
.active {
  background-color: white;
  border-radius: 12px !important;
}
</style>
