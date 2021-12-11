<template>
  <div class="space-y-6">
    <div
      v-for="(item, i) in data.technicians"
      :key="i"
      class="flex justify-between items-center space-x-4 p-2"
    >
      <!-- img -->
      <div class="w-3/12 flex justify-center items-center">
        <img :src="item.image_url" alt="" class="rounded-full h-32" />
      </div>

      <!-- details -->
      <div class="w-9/12 pl-4 pr-8 py-2 space-y-3">
        <technician-revenue
          :name="item.name"
          :revenue_goal="item.revenue_goal"
          :technician_revenue_background_increment="
            data.configuration.technician_revenue_background_increment
          "
        ></technician-revenue>

        <div class="mt-1 flex justify-between items-stretch space-x-2">
          <technician-close-rate
            :close_rate="item.close_rate"
          ></technician-close-rate>

          <div class="flex justify-between items-stretch w-full space-x-2">
            <technician-misc-metric
              :label="label"
              :value="item.qr_magic.current"
              :goal="item.qr_magic.goal"
              :border-color="borderColor"
            ></technician-misc-metric>

            <technician-reviews :reviews="item.reviews"></technician-reviews>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TechnicianCloseRate from "./TechnicianCloseRate.vue";
import TechnicianMiscMetric from "./TechnicianMiscMetric.vue";
import TechnicianRevenue from "./TechnicianRevenue.vue";
import TechnicianReviews from "./TechnicianReviews.vue";
export default {
  components: {
    TechnicianRevenue,
    TechnicianCloseRate,
    TechnicianMiscMetric,
    TechnicianReviews,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      label:
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H8V8H6V6Z" fill="#2E3A59"></path><path d="M3 11V3H11V11H3ZM5 5V9H9V5H5Z" fill="#2E3A59"></path><path d="M13 13H16V15H13V13Z" fill="#2E3A59"></path><path d="M16 15H18V13H21V16H18V17H19V18H21V21H19V19H17V21H13V17H15V19H16V15Z" fill="#2E3A59"></path><path d="M18 6H16V8H18V6Z" fill="#2E3A59"></path><path d="M13 3V11H21V3H13ZM19 5V9H15V5H19Z" fill="#2E3A59"></path><path d="M6 16H8V18H6V16Z" fill="#2E3A59"></path><path d="M3 21V13H11V21H3ZM5 15V19H9V15H5Z" fill="#2E3A59"></path></svg>',
      borderColor: "#11133b",
    };
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
