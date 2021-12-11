<template>
  <div class="w-full">
    <!-- name -->
    <div class="flex justify-between items-center w-full">
      <span class="text-2xl font-bold text-gray-dark"
        >${{
          revenue_goal.lower_bound > 0
            ? intToString(revenue_goal.lower_bound)
            : 0
        }}</span
      >

      <span class="text-xl font-bold text-secondary uppercase">{{ name }}</span>

      <span class="text-2xl font-bold text-gray-dark"
        >${{ intToString(revenue_goal.upper_bound) }}</span
      >
    </div>

    <!-- progress bar -->
    <div class="w-full bg-gray-light relative">
      <div
        class="text-2xl font-bold text-white lowercase text-right px-2 relative z-[2]"
        :class="
          revenue_goal.current >= revenue_goal.upper_bound
            ? 'bg-success-color'
            : 'bg-primary'
        "
        :style="`width: ${getWidth(
          revenue_goal.upper_bound,
          revenue_goal.current
        )}`"
      >
        <span
          :class="
            revenue_goal.current < 700 &&
            'inline-block transform translate-x-[100%] text-primary'
          "
          >${{ revenue_goal.current }}</span
        >
      </div>

      <!-- increment -->
      <div
        class="absolute top-0 h-full bg-gray-base z-[1]"
        :style="`right: ${
          100 /
          (revenue_goal.upper_bound / technician_revenue_background_increment)
        }%; width: ${
          100 /
          (revenue_goal.upper_bound / technician_revenue_background_increment)
        }%`"
      ></div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    revenue_goal: {
      type: Object,
      default: null,
    },
    technician_revenue_background_increment: {
      type: Number,
      default: 0,
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

    getWidth(goal, current) {
      if (current < goal) {
        return (current / goal) * 100 + "%";
      } else if (current === goal) {
        return 100 + "%";
      } else {
        return 105 + "%";
      }
    },
  },
};
</script>

<style></style>
