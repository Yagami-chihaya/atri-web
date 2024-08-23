<template>
  <div>

    <div class="banner">
      <video id="bgvideo" v-show="bgVideoIsLoading" src="https://img.picgo.net/2024/08/21/4k_1b6a9d7ef844c4d7e.mp4"
        loop="loop" autoplay="autoplay" preload="metadata" muted></video>
      <img class="bgImg" v-show="!bgVideoIsLoading"
        src="https://img.picgo.net/2024/08/09/title_base223d2708d7c4dc262.png">

      <div class="menu" :style="{ 'right': bgVideoIsLoading ? '0' : '' }">
        <p class="title"><a href="#CG_show">C G 鉴赏</a></p>
        <p class="title"><a href="#">BGM 鉴赏</a></p>
        <p class="title"><a href="#">AI talk</a></p>
        <p class="title"><a href="#">更新log</a></p>
        <p class="title"><a href="#">Comments</a></p>
      </div>
    </div>
    <audio id="start_voice" preload autoplay>
      <source src="../assets/system_voice/ATR_sys_004.wav" type="audio/wav">
    </audio>
    <div class="container" id="CG_show">
      <div class="head">
        <h2 class="title">Memory</h2>



        <div class="radio-inputs">
          <label class="radio" @click="changeCgStyle('list')">
            <input type="radio" name="radio" checked="">
            <span class="name">List</span>
          </label>
          <label class="radio">
            <input type="radio" name="radio" @click="changeCgStyle('card')">
            <span class="name">Card</span>
          </label>


        </div>

      </div>
      <div class="content">
        <div class="list_box">
          <ul class="cg_list" v-show="CGStyle == 'list'">
            <li v-for="item in cg_single_list" class="cg_info" :key="item" @click="showCG(item)">

              
              <el-image :src="StringToURL(item.coverURL).href">
                <template #placeholder>

                  <div class="loader">
                    <span class="l">L</span>
                    <span class="o">o</span>
                    <span class="a">a</span>
                    <span class="d">d</span>
                    <span class="i">i</span>
                    <span class="n">n</span>
                    <span class="g">g</span>
                    <span class="d1">.</span>
                    <span class="d2">.</span>
                  </div>
                </template>
              </el-image>
            </li>
            <el-pagination background layout="prev, pager, next" @current-change="changeCGPage"
              :total="cg_list[0].list.length" />
          </ul>
          <el-carousel v-show="CGStyle == 'card'" class="cg_card" indicator-position="none" :interval="4000" type="card"
            height="300px">
            <el-carousel-item v-for="item in cg_single_list" :key="item" @click="showCG(item)">
              <div class="imgBox">
                <img :src="StringToURL(item.coverURL).href" alt=" ">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>


    </div>
    <h2>{{ isCGplayerShow }}</h2>
    <CGplayer v-show="isCGplayerShow"  @close="closeCG">
      <!-- <div class="imgBox">
        <img id="cg" v-show="CGisLoading" @load="loadSuccess" :src="StringToURL(CGurl).href" @click="nextCG">
        <div class="loader" v-show="!CGisLoading">
          <span class="l">L</span>
          <span class="o">o</span>
          <span class="a">a</span>
          <span class="d">d</span>
          <span class="i">i</span>
          <span class="n">n</span>
          <span class="g">g</span>
          <span class="d1">.</span>
          <span class="d2">.</span>
        </div>
      </div> -->
      <el-image preview-teleported :src="StringToURL(CGurl).href" @click="nextCG">
        <template #placeholder>

          <div class="loader">
            <span class="l">L</span>
            <span class="o">o</span>
            <span class="a">a</span>
            <span class="d">d</span>
            <span class="i">i</span>
            <span class="n">n</span>
            <span class="g">g</span>
            <span class="d1">.</span>
            <span class="d2">.</span>
          </div>
        </template>
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template>
      </el-image>
      
    </CGplayer>


  </div>
</template>

<script>
import CGplayer from '@/components/common/cgplayer.vue'
import Button_one from '@/components/common/button_one.vue'

import { useCounterStore } from '/src/store/index.js'
import { storeToRefs } from 'pinia'

import { StringToURL } from '/src/utils/index.js'

const store = useCounterStore()
let { systeam_voice } = storeToRefs(store)


export default {
  el: 'home',
  data() {
    return {
      //cg列表
      cg_list: [
        {
          name: "img",
          id: 0,
          list: [
            {
              id: 0,
              coverURL: "https://img.picgo.net/2024/08/09/ev000al7d5c8f298a09b64d.md.jpg",
              url: "https://img.picgo.net/2024/08/09/ev000al7d5c8f298a09b64d.jpg",
              children: [

              ]
            },
            {
              id: 1,
              coverURL: "https://img.picgo.net/2024/08/09/ev001aldfb66c3d149bd6d5.md.png",
              url: "https://img.picgo.net/2024/08/09/ev001aldfb66c3d149bd6d5.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev001bl6420e9a6243f755a.png",
                "https://img.picgo.net/2024/08/09/ev001clbd4c9208fa95b61c.png",
              ]
            },
            {
              id: 2,
              coverURL: "https://img.picgo.net/2024/08/09/ev002al50e8b3a55193f75d.md.png",
              url: "https://img.picgo.net/2024/08/09/ev002al50e8b3a55193f75d.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev002bl2a7d63c10b9c3819.png",
              ]
            },
            {
              id: 3,
              coverURL: "https://img.picgo.net/2024/08/09/ev003al81372ddfef4f8bfc.md.png",
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
              coverURL: "https://img.picgo.net/2024/08/09/ev004al1f51489f7b23db97.md.png",
              url: "https://img.picgo.net/2024/08/09/ev004al1f51489f7b23db97.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev004bldcd0d2f5a13aa5ed.png",
              ]
            },
            {
              id: 5,
              coverURL: "https://img.picgo.net/2024/08/09/ev005al63d7fb212b65f517.md.png",
              url: "https://img.picgo.net/2024/08/09/ev005al63d7fb212b65f517.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev005bl3aafa2bf5a681213.png",
                "https://img.picgo.net/2024/08/09/ev005cl3c56e66a6d7d9cfa.png",
              ]
            },
            {
              id: 6,
              coverURL: "https://img.picgo.net/2024/08/09/ev006alf256c7859e44f0be.md.png",
              url: "https://img.picgo.net/2024/08/09/ev006alf256c7859e44f0be.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev006bl91db0ede1ad7be0c.png",
              ]
            },
            {
              id: 7,
              coverURL: "https://img.picgo.net/2024/08/09/ev007alfa9ec5c48286aada.md.png",
              url: "https://img.picgo.net/2024/08/09/ev007alfa9ec5c48286aada.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev007blfe640a0b7b432789.png",
              ]
            },
            {
              id: 8,
              coverURL: "https://img.picgo.net/2024/08/09/ev008al5640fdc350781649.md.png",
              url: "https://img.picgo.net/2024/08/09/ev008al5640fdc350781649.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev008blede18c5ecbc3e8f6.png",
                "https://img.picgo.net/2024/08/09/ev008clf9584d32c2101ce5.png"
              ]
            },
            {
              id: 9,
              coverURL: "https://img.picgo.net/2024/08/09/ev009al3790029e482a2be3.md.png",
              url: "https://img.picgo.net/2024/08/09/ev009al3790029e482a2be3.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev009bl41e4a04f7206245c.png",

              ]
            },
            {
              id: 10,
              coverURL: "https://img.picgo.net/2024/08/09/ev010ale6cc7265ee65c721.md.png",
              url: "https://img.picgo.net/2024/08/09/ev010ale6cc7265ee65c721.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev010blb2510e437110348f.png",

              ]
            },
            {
              id: 11,
              coverURL: "https://img.picgo.net/2024/08/09/ev011alf59aaea4eebcd998.md.png",
              url: "https://img.picgo.net/2024/08/09/ev011alf59aaea4eebcd998.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev011bl7d9c368f8c938c74.png",
                "https://img.picgo.net/2024/08/09/ev011cl87ce67f06e027a5b.png"
              ]
            },
            {
              id: 12,
              coverURL: "https://img.picgo.net/2024/08/09/ev012alfc03ed3e5a3a20e1.md.png",
              url: "https://img.picgo.net/2024/08/09/ev012alfc03ed3e5a3a20e1.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev012bl105dd9b9297304c8.png",
                "https://img.picgo.net/2024/08/09/ev012claa938c2f4c7c7238.png"
              ]
            },
            {
              id: 13,
              coverURL: "https://img.picgo.net/2024/08/09/ev013ald4e18c4444acd3ae.md.png",
              url: "https://img.picgo.net/2024/08/09/ev013ald4e18c4444acd3ae.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev013blaf15e6e2bf6d34df.png",

              ]
            },
            {
              id: 14,
              coverURL: "https://img.picgo.net/2024/08/09/ev014al36ff310ac269329c.md.png",
              url: "https://img.picgo.net/2024/08/09/ev014al36ff310ac269329c.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev014bla040b74df874ea7a.png",

              ]
            },
            {
              id: 15,
              coverURL: "https://img.picgo.net/2024/08/09/ev015ala29479487eb6fc6c.md.png",
              url: "https://img.picgo.net/2024/08/09/ev015ala29479487eb6fc6c.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev015bl3fdb4cb02ce9a2bb.png",
                "https://img.picgo.net/2024/08/09/ev015cl64eb5d9d136ad07b.png"
              ]
            },
            {
              id: 16,
              coverURL: "https://img.picgo.net/2024/08/09/ev016al7da9e96ad08ea9d8.md.png",
              url: "https://img.picgo.net/2024/08/09/ev016al7da9e96ad08ea9d8.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev016bl08c3a2a2d6d7f4b9.png",

              ]
            },
            {
              id: 17,
              coverURL: "https://img.picgo.net/2024/08/09/ev017ald5aeec49823e5840.md.png",
              url: "https://img.picgo.net/2024/08/09/ev017ald5aeec49823e5840.png",
              children: [

              ]
            },
            {
              id: 18,
              coverURL: "https://img.picgo.net/2024/08/09/ev018al4e997679f0590713.md.png",
              url: "https://img.picgo.net/2024/08/09/ev018al4e997679f0590713.png",
              children: [

              ]
            },
            {
              id: 19,
              coverURL: "https://img.picgo.net/2024/08/09/ev019al4a6a6a1552f2ccf0.md.png",
              url: "https://img.picgo.net/2024/08/09/ev019al4a6a6a1552f2ccf0.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev019bla8738f29d550d263.png",

              ]
            },
            {
              id: 20,
              coverURL: "https://img.picgo.net/2024/08/09/ev020al4d18a90c84936bf4.md.png",
              url: "https://img.picgo.net/2024/08/09/ev020al4d18a90c84936bf4.png",
              children: [
              ]
            },
            {
              id: 21,
              coverURL: "https://img.picgo.net/2024/08/09/ev021ald6669b48a1aa7c02.md.png",
              url: "https://img.picgo.net/2024/08/09/ev021ald6669b48a1aa7c02.png",
              children: [

              ]
            },
            {
              id: 22,
              coverURL: "https://img.picgo.net/2024/08/09/ev101al4841996aae983cef.md.png",
              url: "https://img.picgo.net/2024/08/09/ev101al4841996aae983cef.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev101bl245826b7729a20bb.png"
              ]
            },
            {
              id: 23,
              coverURL: "https://img.picgo.net/2024/08/09/ev102al5a3e9f55d1f76fe9.md.png",
              url: "https://img.picgo.net/2024/08/09/ev102al5a3e9f55d1f76fe9.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev102bl9b018715491caa4b.png"
              ]
            },
            {
              id: 24,
              coverURL: "https://img.picgo.net/2024/08/09/ev103ala97b64a9f3f0ce3b.md.png",
              url: "https://img.picgo.net/2024/08/09/ev103ala97b64a9f3f0ce3b.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev103bl8817ca26d158435a.png",
                "https://img.picgo.net/2024/08/09/ev103cl1ee6a7ba60dfeb41.png"
              ]
            },
            {
              id: 25,
              coverURL: "https://img.picgo.net/2024/08/09/sd001a26e3d8b827956df5.md.png",
              url: "https://img.picgo.net/2024/08/09/sd001a26e3d8b827956df5.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd001be0aed125e62df66d.png",
                "https://img.picgo.net/2024/08/09/sd001cfbaa6f2b0c234315.png"
              ]
            },
            {
              id: 26,
              coverURL: "https://img.picgo.net/2024/08/09/sd002ad060ecd447faf480.md.png",
              url: "https://img.picgo.net/2024/08/09/sd002ad060ecd447faf480.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd002bc97dadaddb1ecff9.png",

              ]
            },
            {
              id: 27,
              coverURL: "https://img.picgo.net/2024/08/09/sd003a0bf549ab062136c2.md.png",
              url: "https://img.picgo.net/2024/08/09/sd003a0bf549ab062136c2.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd003b9911de75b848fd14.png",
                "https://img.picgo.net/2024/08/09/sd003c5907beb138e53a1e.png"
              ]
            },
            {
              id: 28,
              coverURL: "https://img.picgo.net/2024/08/09/sd004a1ef7089b07c4864c.md.png",
              url: "https://img.picgo.net/2024/08/09/sd004a1ef7089b07c4864c.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd004bed6e71d10e016b6a.png",

              ]
            },
            {
              id: 29,
              coverURL: "https://img.picgo.net/2024/08/09/sd005a0825ed01c69c5f09.md.png",
              url: "https://img.picgo.net/2024/08/09/sd005a0825ed01c69c5f09.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd005b70c068cb975bcb3c.png",
                "https://img.picgo.net/2024/08/09/sd005c5cfb180d15263505.png"
              ]
            },
            {
              id: 30,
              coverURL: "https://img.picgo.net/2024/08/09/sd006a79c7aaf447aa0900.md.png",
              url: "https://img.picgo.net/2024/08/09/sd006a79c7aaf447aa0900.png",
              children: [


              ]
            },
            {
              id: 31,
              coverURL: "https://img.picgo.net/2024/08/09/title_base8c69345d0600c787.md.png",
              url: "https://img.picgo.net/2024/08/09/title_base8c69345d0600c787.png",
              children: [
                "https://img.picgo.net/2024/08/09/title_base223d2708d7c4dc262.png",

              ]
            },


          ],

        }
      ],
      cg_single_list: [],       //单页的CG列表
      list_count: 9,      //单页CG数量


      CGStyle: 'list',    //cg风格
      CGurl: '../assets/img/cover.jpg',
      childCG: [],
      CGindex: 0,
      isCGplayerShow:false,
      CGisLoading:false,

      bgVideoIsLoading: false,

    }
  },
  components: {
    CGplayer,
    Button_one,

  },
  
  methods: {
    StringToURL,
    showCG: function (item) {
   
      this.isCGplayerShow = true
      this.CGurl = item.url

      this.childCG = item.children
    },
    closeCG:function(){
      this.isCGplayerShow = false
    },
    nextCG: function () {
      if (this.CGindex < this.childCG.length) {

        this.CGurl = this.childCG[this.CGindex]
        this.CGindex++
      } else {
        this.isCGplayerShow = false
        this.CGindex = 0
      }

    },
    changeCgStyle: function (mode) {

      this.CGStyle = mode


    },
    changeCGPage: function (index) {

      this.cg_single_list = this.cg_list[0].list.slice((index - 1) * this.list_count, index * this.list_count)

    },
    loadSuccess:function(e){

      this.CGisLoading = true
    }
  },
  created() {
    this.changeCGPage(1)

  },
  mounted() {

    const video = document.getElementById('bgvideo')
    const start_voice = document.getElementById('start_voice')
 

    systeam_voice.value['start_voice'] = start_voice

    this.$nextTick(() => {

      if (video) {        //判断背景视频是否加载
        video.addEventListener('loadeddata', () => {
          this.bgVideoIsLoading = true;
        });
      }
     

      
    });
    

  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  overflow: hidden;
  animation: show 1s;
  .bgImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  #bgvideo {
    position: relative;
    width: 100%;

    z-index: 1;
  }

  .menu {
    padding: 10rem 15rem 0;
    width: 15rem;

    position: absolute;
    top: 0;
    z-index: 1;

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

      a {
        color: #0953b3;
        text-decoration: none;
      }
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

@keyframes show {
  0%{
    opacity: 0;
    transform: translateY(-500px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}

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


#CG_show {

  .radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: #EEE;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 0.25rem;
    width: 18rem;
    font-size: 1rem;
    margin-right:2rem;
  }

  .radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
  }

  .radio-inputs .radio input {
    display: none;
  }

  .radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: .5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all .15s ease-in-out;
  }

  .radio-inputs .radio input:checked+.name {
    background-color: #fff;
    font-weight: 600;
  }


  .cg_list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .el-pagination {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    li {
      cursor: pointer;
      border: 1px solid lightgrey;
      list-style: none;
      width: 28%;
      padding: 1%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 1% 0;

      .el-image {
        width: 100%;
        transition: .3s;
      }

    }

    li:hover {
      .el-image {
        scale: 1.2;
      }
    }
  }

  .cg_card {
    padding: 5rem 0;

    .imgBox {
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 98%;
        height: 98%;
        border: 1px solid lightgrey;
      }
    }
  }
}

.cgPlayer {
  z-index: 2;

  img {
    width: 100%;
    z-index:2;
    position: relative;
  }

  .demo-image__error .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
  }
  .demo-image__error .image-slot .el-icon {
    font-size: 30px;
  }


}


.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  .l {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.2s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .o {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.4s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .a {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.6s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .d {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.8s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .i {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 1s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .n {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 1.2s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .g {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 1.4s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .d1 {
    color: black;
    opacity: 0;
    animation: pass1 2s ease-in-out infinite;
    animation-delay: 1.6s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .d2 {
    color: black;
    opacity: 0;
    animation: pass1 2s ease-in-out infinite;
    animation-delay: 2s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  @keyframes pass {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes pass1 {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
