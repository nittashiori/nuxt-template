import Logo from './index.vue'

export default {
  title: 'Atoms/Logo',
  components: Logo,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<logo />',
})
