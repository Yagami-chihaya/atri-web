
<template>
  <div id="nav">
    <topNavbar></topNavbar>
    <RouterView/>
    <aplayer></aplayer>
  </div>

</template>

<script setup>
import { defineComponent, onMounted } from 'vue'

//组件
import topNavbar from './components/common/topNavbar.vue';
import aplayer from './components/common/aplayer.vue';

</script>




<style scoped>
#nav{
  position: relative;
}
</style>
