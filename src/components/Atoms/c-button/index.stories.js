import CButton from './index.vue'

export default {
  title: 'atoms/c-button',
  component: CButton,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CButton },
  template: `<c-button v-bind="$props" @onClick="onClick" /> `,
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  secondary: false,
  label: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  scondary: true,
  label: 'Secondary Button',
}
