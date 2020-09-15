/* eslint-disable no-unused-vars */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Darkmode from 'darkmode-js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '~/assets/styles/reset.scss';
import '~/assets/styles/global.scss';

config.autoAddCss = false;
library.add(faArrowLeft, faSun, faMoon);

export default function (Vue, { router, head, isClient }) {
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.component('Layout', DefaultLayout);


  const options = {
    time: '1s',
    autoMatchOsTheme: true,
    saveInCookies: true
  };

  Vue.prototype.$darkmode = new Darkmode(options);
}
