// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { library } from '@fortawesome/fontawesome-svg-core';
import 'vuetify/styles'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Add the Facebook icon to the library
library.add(faFacebookF,faTwitter, faYoutube);


// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
 {
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
},
 }
)
