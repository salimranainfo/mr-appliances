<template>
  <div class="flex justify-between items-center space-x-2 py-1">
    <div class="text-2xl font-bold text-gray-dark lowercase">
      <span>${{ intToString(revenue_goal.lower_bound) }}</span>
    </div>

    <div class="w-full bg-gray-light p-[.07rem] relative">
      <!-- current revenue -->
      <div
        class="text-xl font-bold text-white lowercase bg-success-color text-right px-2 leading-none"
        :style="`width: ${
          (revenue_goal.current / revenue_goal.upper_bound) * 100
        }%`"
      >
        <span>${{ intToString(revenue_goal.current) }}</span>
      </div>

      <!-- Projected revenue -->
      <div
        class="absolute top-0 h-full w-2 transform translate-x-[-50%] bg-red-600 p-[.07rem] border-b border-t"
        :style="`left: ${
          (revenue_goal.projected / revenue_goal.upper_bound) * 100
        }%`"
      >
        <span
          class="inline-block transform -translate-y-6 -translate-x-4 text-xs font-semibold text-red-600"
          >${{ intToString(revenue_goal.projected) }}</span
        >
      </div>
    </div>

    <div class="text-2xl font-bold text-gray-dark">
      <span>${{ intToString(revenue_goal.upper_bound) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    revenue_goal: {
      type: Object,
      default: null,
    },
  },

  methods: {
    intToString(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },
  },
};
</script>

<style></style>
