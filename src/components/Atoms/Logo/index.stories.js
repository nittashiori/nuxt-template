import logo from './index.vue'

export default {
  title: 'atoms/logo',
  components: logo,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { logo },
  template: '<logo />',
})
