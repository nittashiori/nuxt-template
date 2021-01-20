<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-template</h1>
      <div class="links">
        <Button
          :primary="true"
          :secondary="false"
          :size="medium"
          label="Documentation"
          @onClick="toDocument"
        />
        <Button
          :primary="false"
          :secondary="true"
          :size="medium"
          label="GitHub"
          @onClick="toGithub"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Atoms/Logo'
import Button from '~/components/Atoms/Button'

export default {
  components: {
    Logo,
    Button,
  },
  methods: {
    toDocument() {
      const url = 'https://nuxtjs.org/'
      window.location.href = url
    },
    toGithub() {
      const url = 'https://github.com/nuxt/nuxt.js'
      window.location.href = url
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $gray;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  .button {
    margin: 0 5px;
  }
}
</style>
