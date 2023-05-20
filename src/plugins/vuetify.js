import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';



Vue.use(Vuetify);

export default new Vuetify({
      theme: {
            themes: {
                  light: {
                        primary: '#9900E0',
                        secondary: '#5C3D6B',
                        accent: '#C080E0',
                        error: '#E60D0A',
                        success: '#06E603',
                        bg: '#D8B2F9',
                        confirm: '#7A33A1',
                        cancel: '#9840C7',
                  }
            }
      },
});
