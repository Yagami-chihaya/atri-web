
<template>
  
  <div  id="nav">
    <div v-show="isLogin">
      <topNavbar></topNavbar>
      <RouterView/>
      <aplayer></aplayer>
    </div>
    <login v-show="!isLogin"></login>
    
  </div>
  

</template>

<script setup>
import { defineComponent, onMounted } from 'vue'

import { useCounterStore } from '/src/store/index.js'
import { storeToRefs } from 'pinia'


const store = useCounterStore()
const {isLogin} = storeToRefs(store)

//组件
import topNavbar from './components/common/topNavbar.vue';
import aplayer from './components/common/aplayer.vue';
import login from './components/common/login.vue'


</script>




<style scoped>
#nav{
  position: relative;
}

</style>
