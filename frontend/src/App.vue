<template>
  <div id="app">
    <Navbar></Navbar>
     <keep-alive>
      <router-view></router-view>
     </keep-alive>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: "App",
  components: {
    Navbar
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
html, body {
    height:100%;
}
</style>
