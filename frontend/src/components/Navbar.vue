<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1 class="navbar-item title is-4">
         Prediction & Mapping Relationship
      </h1>
        
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        @click="isOpen = !isOpen"
        v-bind:class="{'is-active': isOpen}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-start">
        <a @click ="handleClick" class="navbar-item"><router-link to="/Dashboard">Relationship Mapping</router-link></a>
        <a @click ="handleClick" class="navbar-item"><router-link to="/Prediction">Prediction</router-link></a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
        return {
            isOpen: false
        }
  },
  methods: {
    handleClick : function(){
      this.isOpen = false
    }
  },
};
</script>
<style scoped>
 
</style>