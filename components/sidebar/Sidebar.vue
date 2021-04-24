<template>
  <div class="fixed h-screen w-64 bg-nord-snow-3 dark:bg-nord-night-0">
    <div class="h-full flex flex-col items-center justify-between overflow-y-auto hide-scrollbar">
      <div class="w-full px-5">
        <!----------------------------->
        <!-- top ---------------------->
        <!----------------------------->
        <div class="h-16 flex justify-between lg:justify-center items-center border-b border-nord-snow-1 dark:border-nord-night-2">
          <div class="flex space-x-4">
            <logo />
          </div>

          <div @click="toggleSidebar()">
            <font-awesome-icon icon="bars" class="block lg:hidden text-nord-night-0 dark:text-nord-snow-3" />
          </div>
        </div>

        <!-- home -->
        <div class="mt-5">
          <button
            class="w-full text-white font-medium py-2 rounded-lg focus:outline-none shadow-xs bg-nord-frost-2 hover:bg-nord-frost-1 transition duration-150 "
            @click="$router.push('/')"
          >
            Home
          </button>
        </div>

        <!----------------------------->
        <!-- main menu -->
        <div class="mt-10">
          <sidebar-category
            title="MAIN"
          />

          <sidebar-item
            title="Blog"
            icon="newspaper"
            to="/"
          />

          <sidebar-item
            title="Works"
            icon="briefcase"
            to="/"
          />

          <sidebar-item
            title="contact"
            icon="envelope"
            to="/"
          />
        </div>
      </div>

      <!----------------------------->
      <!-- bottom ------------------->
      <!----------------------------->
      <div class="w-full flex items-center justify-between p-5">
        <p class="text-sm text-gray-500">
          v{{ version }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import packageJson from '@/package.json'

export default {
  data () {
    return {
      version: packageJson.version
    }
  },
  methods: {
    toggleSidebar () {
      this.$store.commit('layout/TOGGLE_SIDEBAR')
    }
  }
}
</script>
