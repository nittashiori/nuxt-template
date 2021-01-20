<template>
  <button
    type="button"
    :class="['button', { primary, secondary }, size]"
    :style="style"
    :backgroundColor="backgroundColor"
    @click="onClick"
    v-text="label"
  />
</template>

<script>
export default {
  props: {
    /**
     * ボタン内に表示するテキスト
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * プライマリーカラーを適用するか
     */
    primary: {
      type: Boolean,
      default: false,
    },
    /**
     * セカンダリーカラーを適用するか
     */
    secondary: {
      type: Boolean,
      default: false,
    },
    /**
     * ボタンのサイズ
     * @values small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
  },
  methods: {
    /**
     * ボタンクリック時のイベント
     * @event onClick
     * @type {object}
     */
    onClick() {
      /**
       * ボタンクリック時のイベント
       * @event onClick
       * @type {object}
       */
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #333;
  color: #333;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI';
  text-align: center;
  background-color: white;

  &.primary {
    color: $green;
    border: 1px solid $green;
    &:hover {
      background: $green;
      color: white;
    }
  }
  &.secondary {
    color: $gray;
    border: 1px solid $gray;
    &:hover {
      background: $gray;
      color: white;
    }
  }

  &.large {
    font-size: 2rem;
    padding: 12px 24px;
  }
  &.medium {
    font-size: 1.6rem;
    padding: 11px 20px;
  }
  &.small {
    font-size: 1.2rem;
    padding: 10px 16px;
  }
}
</style>
