<template>
  <div class="topNavbar">
    <div class="left">
      <div class="img">
        <img src="\src\assets\img\logo.png">
      </div>
      <p>ATRI -MY DEAR MOMENTS-</p>
    </div>
    <div class="right">
      <ul class="routeList">
        <router-link to="/"><Button_one btn_title="Home"></Button_one></router-link>
        <router-link to="/recommand"><Button_one btn_title="开溜！！"></Button_one></router-link>
        <router-link to="/texture"><Button_one btn_title="文章"></Button_one></router-link>
        <router-link to="/about"><Button_one btn_title="关于"></Button_one></router-link>
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
import Button_one from './button_one.vue'
export default {
  el: '',
  data () {
    return {
      
    }
  },
  components:{
    Button_one

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
 .topNavbar{
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.247);
  width: 100vw;
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
      position: relative;
      border-radius: 5px;
      
      img{
        position: absolute;
        top: 0;
        left: -.2rem;
        width: 8rem;
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
      width: 30rem;
      justify-content: space-around;
      // a{
      //   display: block;
      //   width: 4rem;
      //   padding: 1rem;
      //   text-align: center;
      //   background: rgba(255, 255, 255, 0.459);
      //   border: 1px solid lightgrey;
      //   color: white;
      //   text-decoration: none;
      // }
      // a:hover{
      //   background: white;
      //   color: aqua;
      // }
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
