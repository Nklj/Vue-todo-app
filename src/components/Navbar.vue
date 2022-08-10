<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Tasks</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link  to="/"  >
          Create
        </router-link>
        <router-link  to="/list"  >
          List
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
 nav {
   padding: 0 2rem;
 }
 ul {
   display: flex;
 }
</style>
