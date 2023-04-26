<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Index</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/personajes" class="nav-link">Personajes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/locations" class="nav-link">Locaciónes</router-link>
        </li>
      </ul>

     
   
    </div>
    
  </nav>

<div>
  <router-view></router-view>
</div>

</template>
<style scoped>
</style>
