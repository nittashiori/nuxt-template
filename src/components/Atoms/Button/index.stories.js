import Button from './index.vue'

export default {
  title: 'Atoms/Button',
  component: Button,
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
  components: { Button },
  template: `<Button v-bind="$props" @onClick="onClick" /> `,
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
