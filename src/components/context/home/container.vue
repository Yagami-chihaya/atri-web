<template>
  <div class="container">
      <div class="head">
        <h2 class="title">{{title}}</h2>
        <slot name="right"></slot>

      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>


    </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      
    }
  },
  props:{
    title:'',
    
  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;

  background: rgb(255, 255, 255);

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;

    .title {
      color: #0953b3;
      font-weight: bolder;
      padding: 2rem 5rem;
    }
  }

  .content {
    width: 94%;
    margin: 0 auto;
    padding: 2rem 0;
  }
}
</style>
