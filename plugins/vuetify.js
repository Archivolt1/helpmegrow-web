import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import colors from "vuetify/es5/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green.base,
                secondary: colors.green.lighten1,
                accent: colors.green.darken2,
            },
        },
    },
});