<template>
  <div id="app">
    <Navbar></Navbar>
    <Display></Display>
  </div>
</template>

<script>
import Display from "./components/Display";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Display,
    Navbar
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
