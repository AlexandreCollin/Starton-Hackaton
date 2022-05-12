import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#393939',
        secondary: '#2D2D2D',
        tertiary: '#E7E9EB',
        tags: '#435460',
        accent: '#2B83E3',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});

/*
background principal :
        couleur des barres : #4A4E51
        couleur texte questions : #2B83E3
 */
