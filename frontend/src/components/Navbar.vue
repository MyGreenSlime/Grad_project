<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1 class="navbar-item title is-3">
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
        Graduate Project
      </h1>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Relationship Mapping</a>
        <a class="navbar-item">Prediction</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
</style>