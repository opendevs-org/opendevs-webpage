/* eslint-disable no-unused-vars */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Darkmode from 'darkmode-js';
import '~/assets/styles/reset.scss';
import '~/assets/styles/global.scss';

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);


  const options = {
    time: '1s',
    autoMatchOsTheme: true,
    saveInCookies: true
  };

  Vue.prototype.$darkmode = new Darkmode(options);
}
