<template>
  <div class="-mt-16 lg:-mt-32">
    <!-- separation -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 150" class="text-nord-snow-0 dark:text-nord-night-0">
      <path class="fill-current" d="M0,128L80,133.3C160,139,320,149,480,133.3C640,117,800,75,960,74.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
    </svg>

    <!-- footer -->
    <footer class="bg-nord-snow-0 dark:bg-nord-night-0">
      <div class="px-5 lg:px-20 2xl:px-72 py-16 mx-auto">
        <div class="flex flex-col lg:flex-row lg:justify-between text-center lg:text-left">
          <!-- ==================================================== -->
          <!-- == METADATA ======================================== -->
          <!-- ==================================================== -->
          <div class="mb-12 lg:mb-0">
            <h1 class="text-3xl font-bold text-nord-night-4 dark:text-nord-snow-3 pb-10">
              arthurdufour.com
            </h1>
            <p class="text-sm text-gray-500">
              © 2021 Arthur Dufour<br>
              Made with <span class="text-nord-red">❤️</span> in Lyon, France.<br>
              Inspired by <span class="text-nord-frost-3">Nord</span>, built with <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="text-nord-frost-3">TailwindCSS</a>.<br>
              v{{ version }}
            </p>
          </div>

          <!-- ==================================================== -->
          <!-- == SITEMAP ========================================= -->
          <!-- ==================================================== -->
          <div class="flex flex-row flex-wrap justify-center lg:justify-end">
            <!-- Home -->
            <div class="flex flex-col w-32 xl:w-48 mb-5">
              <div class="border-b border-gray-500 dark:border-nord2 pb-2 mb-4">
                <nuxt-link
                  to="/"
                  class="text-xl pb-2"
                  :class="$nuxt.$route.path === '/'
                    ? 'text-nord-night-2 dark:text-nord-snow-1 border-b-4 border-nord-night-2 dark:border-nord-snow-1'
                    : 'text-gray-500 dark:text-gray-400'"
                >
                  Home
                </nuxt-link>
              </div>

              <div class="flex flex-col">
                <p class="py-1 text-gray-500 dark:text-gray-400">
                  Home
                </p>
              </div>

              <div class="flex flex-col">
                <p class="py-1 text-gray-500 dark:text-gray-400">
                  Works
                </p>
              </div>

              <div class="flex flex-col">
                <p class="py-1 text-gray-500 dark:text-gray-400">
                  Blog
                </p>
              </div>
            </div>

            <!-- Contact -->
            <div class="flex flex-col w-32 xl:w-48 mb-5">
              <div class="border-b border-gray-500 dark:border-nord2 pb-2 mb-4">
                <p class="text-xl text-gray-500 dark:text-gray-400">
                  Contact
                </p>
              </div>

              <div class="flex flex-col text-gray-500 dark:text-gray-400">
                <a href="mailto:arthur.dufour@epsi.fr" target="_blank" rel="noopenner noreferrer" class="py-1">
                  <font-awesome-icon icon="envelope" class="mr-1" />
                  Email
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopenner noreferrer" class="py-1">
                  <font-awesome-icon :icon="['fab', 'twitter']" class="mr-1" />
                  Twitter
                </a>
                <p class="py-1" @click="copyDiscordId()">
                  <font-awesome-icon :icon="['fab', 'discord']" class="mr-2" />
                  Arthur#0004
                </p>
              </div>
            </div>

            <!-- Settings -->
            <div class="flex flex-col w-32 xl:w-48 mb-5">
              <div class="border-b border-gray-500 dark:border-nord2 pb-2 mb-4">
                <p class="text-xl text-gray-500 dark:text-gray-400">
                  Settings
                </p>
              </div>

              <div class="flex flex-colm">
                <p class="text-gray-500 dark:text-gray-400 cursor-pointer" @click="changeTheme()">
                  <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="mr-1" />
                  <span>{{ isDark ? 'Light theme' : 'Dark theme' }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import packageJson from '~/package.json'

export default {
  data () {
    return {
      version: packageJson.version
    }
  },
  computed: {
    isDark () {
      return this.$colorMode.preference === 'dark'
    }
  },
  methods: {
    changeTheme () {
      this.isDark
        ? this.$colorMode.preference = 'light'
        : this.$colorMode.preference = 'dark'
    },
    copyDiscordId () {
      navigator.clipboard.writeText('Arthur#0004').then(() => {
        // this.$toast.global.success({ message: this.$t('toast.copySuccess') })
      }, () => {
        // this.$toast.global.error({ message: this.$t('toast.copyFailure') })
      })
    }
  }
}
</script>
