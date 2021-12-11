<template>
  <div
    class="flex justify-center items-center space-x-3 px-2 bg-gray-100 w-full"
    :style="`border: 1px solid ${borderColor}`"
  >
    <div class="flex justify-start items-center space-x-1">
      <!-- QR code -->
      <div v-html="label"></div>
      <span
        class="text-gray-dark font-medium text-2xl uppercase tracking-tighter"
        >Magic</span
      >
    </div>

    <div>
      <span class="text-3xl font-bold text-primary">{{ value }}</span>
      <span class="text-gray-dark text-xl font-bold">/{{ goal }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    borderColor: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
    goal: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
