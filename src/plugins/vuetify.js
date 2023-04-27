import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';



Vue.use(Vuetify);

export default new Vuetify({
      theme: {
            themes: {
                  light: {
                        primary: '#9E0052',
                        secondary: '#D1006C',
                        accent: '#52002A',
                        error: '#D10015',
                        success: '#00D10E',
                        bg: '#573848',
                  }
            }
      },
});
