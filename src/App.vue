
<template>
  
  <div  id="nav">
    <div>
      
      <RouterView/>
      <aplayer></aplayer>
     
    </div>
    <!-- <login v-show="!isLogin"></login> -->
    
  </div>
  

</template>

<script setup>

// import { useCounterStore } from '/src/store/index.js'
// import { storeToRefs } from 'pinia'


// const store = useCounterStore()
// const {isLogin} = storeToRefs(store)

//组件

import aplayer from './components/common/aplayer.vue';
// import login from './components/common/login.vue'


</script>




<style scoped>
#nav{
  position: relative;
}

</style>
