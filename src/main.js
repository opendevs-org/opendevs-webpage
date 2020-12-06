/* eslint-disable no-unused-vars */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faSun, faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMedium, faDev } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '~/assets/styles/reset.scss';
import '~/assets/styles/global.scss';

config.autoAddCss = false;
library.add(faArrowLeft, faSun, faMoon, faEnvelope, faGithub, faMedium, faDev, faArrowRight);

export default function (Vue, { router, head, isClient }) {
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.component('Layout', DefaultLayout);
}
