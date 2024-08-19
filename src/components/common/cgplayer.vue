<template>
  <div class="cgPlayer" @click="closeWindows">
    <div class="content">
      <button class="dismiss" type="button" @click="closeWindows">×</button>
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
import { useCounterStore } from '/src/store/index.js'
import { storeToRefs } from 'pinia'


const store = useCounterStore()
const {isCGplayerShow} = storeToRefs(store)


export default {
  el: '',
  data () {
    return {
      
    }
  },
  methods: {
    closeWindows:()=>{
      isCGplayerShow.value = false
    }
  },
}
</script>

<style scoped lang="scss">
.cgPlayer{
  width: 100vw;
  height: 120vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.459);
  animation: open .3s;
  .content{
    width: 800px;

    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #fff;
    position: relative;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    .dismiss {
      position: absolute;
      right: 10px;
      top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      background-color: #fff;
      color: black;
      border: 2px solid #D1D5DB;
      font-size: 1rem;
      font-weight: 300;
      width: 30px;
      height: 30px;
      border-radius: 7px;
      transition: .3s ease;
    }

    .dismiss:hover {
      background-color: #ee0d0d;
      border: 2px solid #ee0d0d;
      color: #fff;
    }

  }
}

@keyframes open{
  0%{
    opacity: 0;
    margin-top: 100px;

  }
  100%{
    opacity: 1;
  }
}
</style>
