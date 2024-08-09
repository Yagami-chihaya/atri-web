<template>
  <div class="topNavbar">
    <div class="left">
      <div class="img">
        <img src="">
      </div>
      <p>ATRI -MY DEAR MOMENTS-</p>
    </div>
    <div class="right">
      <ul class="routeList">
        <router-link to="/">Home</router-link>
        <router-link to="/recommand">开溜！！</router-link>
        <router-link to="/texture">文章</router-link>
        <router-link to="/about">关于</router-link>
      </ul>
      <div class="user">
        <div class="avatar">
          <img src="" alt="">
        </div>
        <div class="info">
          <p>username</p>
        </div>
      </div>
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
  methods: {

  },
}
</script>

<style scoped lang="scss">
 .topNavbar{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.247);
  height: 5rem;
  .left{
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: .5rem;
    .img{
      width: 3.5rem;
      height: 3.5rem;
      overflow: hidden;
      background: black;
      display: flex;
      justify-self: center;
      align-items: center;
      img{
        width: 4rem;
      }
    }
    p{
      margin-left: 1rem;
      color: white;
      font-size: 1.2rem;
    }

  }
  .right{
    height: 100%;
    display: flex;
    .routeList{
      display: flex;
      color: white;
      font-size: 1rem;
      align-items: center;
      a{
        display: block;
        width: 4rem;
        padding: 1rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.459);
        border: 1px solid lightgrey;
        color: white;
        text-decoration: none;
      }
      a:hover{
        background: white;
        color: aqua;
      }
    }
    .routeList::after{
      margin-left:1rem;
      content: '|';
      color: white;
      font-size: 1.5rem;
      font-weight: 200;
    }
    .user{
      margin:0 1rem;
      display: flex;
      align-items: center;
      color: white;
      .avatar{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        background: black;
        display: flex;
        justify-self: center;
        align-items: center;
        margin-right: 1rem;
        img{
          
          width: 3.5rem;
        }
      }
      .info{
        
      }
    }
  }
 }
 
</style>
