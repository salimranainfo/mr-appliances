<template>
  <div class="border border-success-color p-1">
    <span class="text-xl font-bold text-primary"
      >{{ close_rate.current * 100 }}%</span
    >
  </div>
</template>

<script>
export default {
  props: {
    close_rate: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
