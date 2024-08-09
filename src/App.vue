
<template>
  <div id="nav">
    <topNavbar></topNavbar>
    <RouterView />
  </div>

</template>

<script setup>
import { defineComponent } from 'vue'
import topNavbar from './components/common/topNavbar.vue';
</script>




<style scoped>

</style>
