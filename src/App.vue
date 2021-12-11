<template>
  <div id="app" class="w-[50rem] mx-auto border bg-primary px-4">
    <tech-tracker></tech-tracker>
  </div>
</template>

<script>
import TechTracker from "./components/TechTracker.vue";

export default {
  name: "App",
  components: { TechTracker },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
