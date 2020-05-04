
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken1, // #E53935
        secondary: colors.teal.lighten4, // #FFCDD2
        accent: colors.teal.base // #3F51B5
      }
    }
  }
}

export default new Vuetify(opts)
