import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0b5bd8',
        accent: '#D5963A',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
