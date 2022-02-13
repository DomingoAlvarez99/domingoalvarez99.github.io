import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#8BC34A',
        primaryDarken1: '#6DA034',
        secondary: '#9CCC65',
        accent: '#FF8A65',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
