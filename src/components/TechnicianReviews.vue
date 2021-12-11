<template>
  <div class="flex justify-between space-x-8 items-center w-full border border-yellow px-2 bg-gray-50">
    <!-- stars -->
    <div class="flex justify-start items-center space-x-1 w-1/2">
      <span v-for="item in 5" :key="item" class="text-yellow">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class="svg-inline--fa fa-star fa-w-18 h-4 w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          ></path>
        </svg>
      </span>
    </div>

    <div class="w-1/2 flex justify-center">
      <span class="text-2xl font-bold text-gray-dark">${{ reviews.dollar_value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
