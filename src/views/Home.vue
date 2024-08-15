<template>
  <div>
    <div class="banner">
      <div class="menu">
        <p class="title">C G 鉴赏</p>
        <p class="title">BGM 鉴赏</p>
        <p class="title">AI talk</p>
        <p class="title">更新log</p>
        <p class="title">Comments</p>
      </div>
    </div>
    <div class="container" id="CG_show">
      <div class="head">
        <h2 class="title">Memory</h2>
        <label class="switch">
          <input type="checkbox">
          <span class="slider" @click="changeCgStyle"></span>
        </label>
      </div>
      <div class="content">
        
        <div class="list_box">
          <ul class="cg_list" v-show="!CGStyle">
            <li v-for="item in cg_list[0].list" class="cg_info" :key="item" @click="showCG(item.coverURL)">
              <img :src="StringToURL(item.url).href" alt=" ">
            </li>
          </ul>
          <el-carousel v-show="CGStyle" class="cg_card" :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in cg_list[0].list" :key="item" @click="showCG(item.coverURL)">
              <div class="imgBox">
                <img :src="StringToURL(item.url).href" alt=" ">
              </div>
              
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>


    </div>
    <CGplayer v-show="isCGplayerShow">
      <img :src="CGurl">
    </CGplayer>
  </div>
</template>

<script>
import CGplayer from '@/components/common/cgplayer.vue'
import { useStore } from '../store/index.js'
import Button_one from '@/components/common/button_one.vue'


const store = useStore()


export default {
  el: 'home',
  data() {
    return {
      cg_list: [
        {
          name: "img",
          id: 0,
          list: [
            {
              id: 0,
              url: "https://img.picgo.net/2024/08/09/ev000al7d5c8f298a09b64d.jpg",
              children: [

              ]
            },
            {
              id: 1,
              url: "https://img.picgo.net/2024/08/09/ev001aldfb66c3d149bd6d5.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev001bl6420e9a6243f755a.png",
                "https://img.picgo.net/2024/08/09/ev001clbd4c9208fa95b61c.png",
              ]
            },
            {
              id: 2,
              url: "https://img.picgo.net/2024/08/09/ev002al50e8b3a55193f75d.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev002bl2a7d63c10b9c3819.png",
              ]
            },
            {
              id: 3,
              url: "https://img.picgo.net/2024/08/09/ev003al81372ddfef4f8bfc.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev003bl42ea1afd8b49f5aa.png",
                "https://img.picgo.net/2024/08/09/ev003cl5976fd4d1bf61c39.png",
                "https://img.picgo.net/2024/08/09/ev003dl9b8a5fbbcde66c4d.png",
                "https://img.picgo.net/2024/08/09/ev003ela5fc3ae6468b9bde.png",
                "https://img.picgo.net/2024/08/09/ev003flf771e51bb01d2f02.png",
                "https://img.picgo.net/2024/08/09/ev003gl6834e7f28fbcd3bd.png",
              ]
            },
            {
              id: 4,
              url: "https://img.picgo.net/2024/08/09/ev004al1f51489f7b23db97.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev004bldcd0d2f5a13aa5ed.png",
              ]
            },
            {
              id: 5,
              url: "https://img.picgo.net/2024/08/09/ev005al63d7fb212b65f517.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev005bl3aafa2bf5a681213.png",
                "https://img.picgo.net/2024/08/09/ev005cl3c56e66a6d7d9cfa.png",
              ]
            },
            {
              id: 6,
              url: "https://img.picgo.net/2024/08/09/ev006alf256c7859e44f0be.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev006bl91db0ede1ad7be0c.png",
              ]
            },
            {
              id: 7,
              url: "https://img.picgo.net/2024/08/09/ev007alfa9ec5c48286aada.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev007blfe640a0b7b432789.png",
              ]
            },
            {
              id: 8,
              url: "https://img.picgo.net/2024/08/09/ev008al5640fdc350781649.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev008blede18c5ecbc3e8f6.png"
              ]
            },
          ]



        }
      ],
      CGStyle: false,

    }
  },
  components: {
    CGplayer,
    Button_one,

  },
  methods: {
    showCG: (url) => {
      store.isCGplayerShow = true
      this.CGurl = url
    },
    StringToURL: (myurl) => {
      return new URL(myurl, import.meta.url)
    },
    changeCgStyle: function () {

      this.CGStyle = !this.CGStyle
      console.log(this.CGStyle);

    }
  },
}
</script>

<style scoped lang="scss">
.banner {

  background: url('https://img.picgo.net/2024/08/09/title_base223d2708d7c4dc262.png') no-repeat 0 0;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .menu {


    padding: 10rem 15rem;
    width: 15rem;

    min-height: 45rem;

    .title {
      font-family: 'GenJyuuGothicX-Bold';
      display: inline-block;
      color: #0953b3;
      text-shadow:
        -2px -2px 0 #FFF,
        2px -2px 0 #FFF,
        -2px 2px 0 #FFF,
        2px 2px 0 #FFF;
      /* 文字描边 */
      margin: 2rem 0;
      font-size: 2.5rem;
      font-weight: bolder;
      cursor: pointer;
      position: relative;
      border: none;
      background: none;
      text-transform: uppercase;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: color;
    }

    .title:focus:after,
    .title:hover:after {
      width: 100%;
      left: 0%;
    }

    .title:after {
      content: "";
      pointer-events: none;
      bottom: -2px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #fff;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
  }
}

.container {
  width: 100%;

  background: rgba(0, 0, 0, 0.637);

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    .title{
      color: white;
      font-weight: bolder;
      padding: 2rem 5rem;
    }
  }
  .content{
    
  }
}


#CG_show {

  .list_box {
    width: 94%;
    margin: 0 auto;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 34px;
    margin-right: 5rem;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3C3C3C;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked+.slider {
    background-color: #0E6EB8;
  }

  input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(85px);
  }


  .slider:after {
    content: '列表风格';
    color: white;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
  }

  input:checked+.slider:after {
    content: '卡片风格';
  }


  .cg_list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li {
      border: 1px solid lightgrey;
      list-style: none;
      width: 22rem;
      height: 11rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 1rem;

      img {
        width: 22rem;
      }
    }
  }

  .cg_card{
    padding: 5rem 0;
    .imgBox{
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 98%;
        height: 98%;
        border: 1px solid lightgrey;
      }
    }
  }
}
</style>
