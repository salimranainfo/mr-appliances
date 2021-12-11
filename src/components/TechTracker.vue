<template>
  <div class="py-4">
    <div class="flex justify-between items-center mb-4">
      <div class="w-3/12">
        <img :src="data.company_logo_url" alt="" />
      </div>

      <div class="w-9/12">
        <h1
          class="text-secondary font-bold uppercase text-3xl tracking-wide text-center"
        >
          {{ data.header }}
        </h1>
        <h3
          class="font-bold uppercase text-2xl tracking-wide text-gray-dark text-center"
        >
          Week {{ data.week_current_number }} <span class="text-xl">of</span>
          {{ data.week_upper_bound }} -
          {{ getDay }}
        </h3>
      </div>
    </div>

    <revenue-goal :revenue_goal="data.revenue_goal"></revenue-goal>

    <div class="bg-white p-4">
      <technician-tracker :data="data"></technician-tracker>
    </div>
  </div>
</template>

<script>
import data from "../../sales-tracker-sample-data.json";
import RevenueGoal from "./RevenueGoal.vue";
import TechnicianTracker from "./TechnicianTracker.vue";

export default {
  components: { RevenueGoal, TechnicianTracker },
  data() {
    return {
      data: data,
    };
  },

  computed: {
    getDay() {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const currentDate =
        data.current_year + "/" + data.current_month + "/" + data.current_date;

      const d = new Date(currentDate);
      return days[d.getDay()];
    },
  },
};
</script>

<style></style>
