<template>
  <div
    class="mt-2 flex items-center text-sm font-semibold py-2 rounded-md cursor-pointer transition duration-150"
    :class="isActive()
      ? 'bg-nord-frost-2 text-white'
      : 'hover:bg-nord-snow-1 dark:hover:bg-nord-night-2 text-gray-500 dark:text-white'"
    @click="handleClick()"
  >
    <!-- item icon -->
    <font-awesome-icon
      :icon="icon"
      class="mx-4"
    />

    <p class="font-medium">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    isActive () {
      return this.$route.path === this.to
    },
    handleClick () {
      this.$router.push(this.to)
      setTimeout(() => {
        this.$store.commit('layout/TOGGLE_SIDEBAR', false)
      }, 200)
    }
  }
}
</script>
