<template>
  <div class="cgPlayer" @blur="closeWindows">
    <slot></slot>
  </div>
</template>

<script>
// const store = useStore()

export default {
  el: '',
  data () {
    return {
      
    }
  },
  methods: {
    closeWindows:()=>{
      // store.isCGplayerShow = false
    }
  },
}
</script>

<style scoped>

</style>
