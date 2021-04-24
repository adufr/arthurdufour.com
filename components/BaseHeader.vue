<template>
  <div
    class="fixed bg-white dark:bg-nord-night-1 mx-auto left-0 right-0 px-5 lg:px-20 2xl:px-72 py-3"
    :class="{ 'shadow': !isOnTop }"
  >
    <!--------------------------------------------------------------->
    <!-- DESKTOP VERSION -------------------------------------------->
    <!--------------------------------------------------------------->
    <div class="hidden lg:flex flex-row items-center justify-between">
      <logo />

      <div class="flex items-center space-x-10 text-sm text-nord-night-3 dark:text-nord-snow-3">
        <nuxt-link to="/">
          <span class="hover:text-nord-frost-3 cursor-pointer transition duration-300">Blog</span>
        </nuxt-link>
        <nuxt-link to="/">
          <span class="hover:text-nord-frost-3 cursor-pointer transition duration-300">Works</span>
        </nuxt-link>
        <nuxt-link to="/">
          <span class="hover:text-nord-frost-3 cursor-pointer transition duration-300">Contact</span>
        </nuxt-link>
      </div>

      <div class="flex items-center space-x-10 text-sm text-nord-night-3 dark:text-nord-snow-3">
        <p class="cursor-pointer hover:text-blue-400 transition duration-300">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <span class="ml-2">
            Twitter
          </span>
        </p>

        <p class="cursor-pointer hover:text-black transition duration-300">
          <font-awesome-icon :icon="['fab', 'github']" />
          <a href="https://github.com/woosy" target="_blank" class="ml-2">
            Github
          </a>
        </p>

        <div class="cursor-pointer px-3 py-2 bg-nord-snow-0 dark:bg-nord-night-2 rounded-full">
          <font-awesome-icon icon="envelope" class="my-auto" />
        </div>
      </div>
    </div>

    <!--------------------------------------------------------------->
    <!-- MOBILE VERSION --------------------------------------------->
    <!--------------------------------------------------------------->
    <div class="flex lg:hidden flex-row items-center justify-between">
      <logo />

      <p class="text-nord-night-4 dark:text-nord-snow-3">
        <font-awesome-icon class="cursor-pointer" icon="bars" @click="$store.commit('layout/TOGGLE_SIDEBAR')" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOnTop: true
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.isOnTop = !this.isOnTop && window.scrollY === 0
    }
  }
}
</script>
