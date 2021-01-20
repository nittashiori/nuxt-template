import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// nuxt-link を action に送る
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

const req = require.context('../src/components', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

addDecorator(withKnobs)
