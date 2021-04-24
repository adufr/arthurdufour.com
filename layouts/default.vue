<template>
  <div :class="getColorScheme()">
    <!--------------------------------------->
    <!-- backdrop --------------------------->
    <!--------------------------------------->
    <transition name="fade" :duration="200">
      <div v-if="isSidebarOpen" class="fixed inset-0 z-20" @click="toggleSidebar()">
        <div class="absolute inset-0 bg-black opacity-75" />
      </div>
    </transition>

    <!--------------------------------------->
    <!-- sidebar ---------------------------->
    <!--------------------------------------->
    <div
      class="fixed transform transition duration-300 z-30"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-80'"
    >
      <sidebar />
    </div>

    <!--------------------------------------->
    <!-- main content ----------------------->
    <!--------------------------------------->
    <div class="bg-white dark:bg-nord-night-1">
      <!-- Header -->
      <base-header />

      <!-- Page content -->
      <nuxt />

      <!-- Footer -->
      <base-footer />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('layout', [
      'isSidebarOpen'
    ])
  },
  methods: {
    getColorScheme () {
      return this.$colorMode.preference
    },
    toggleSidebar () {
      this.$store.commit('layout/TOGGLE_SIDEBAR', false)
    }
  }
}
</script>
