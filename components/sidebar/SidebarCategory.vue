<template>
  <p class="text-xs text-gray-400 font-semibold">
    {{ title }}
  </p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
