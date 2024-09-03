<template>
  <div>
    <topNavbar></topNavbar>
    <div class="banner">
      <video id="bgvideo" v-show="bgVideoIsLoading" src="https://img.picgo.net/2024/08/21/4k_1b6a9d7ef844c4d7e.mp4"
        loop="loop" autoplay="autoplay" preload="metadata" muted></video>
      <img class="bgImg" v-show="!bgVideoIsLoading"
        src="https://img.picgo.net/2024/08/09/title_base223d2708d7c4dc262.png">

      <div class="menu" :style="{ 'right': bgVideoIsLoading ? '0' : '' }">
        <p class="title"><a href="#CG_show" @click="playVoice('src/assets/system_voice/ATR_sys_008.wav')">C G 鉴赏</a></p>
        <p class="title"><a href="#Background_list">Background</a></p>
        <p class="title"><a href="#">AI talk</a></p>
        <p class="title"><a href="#">更新log</a></p>
        <p class="title"><a href="#comment">Comments</a></p>
      </div>
    </div>
    <audio id="start_voice" preload autoplay>
      <source src="../assets/system_voice/ATR_sys_004.wav" type="audio/wav">
    </audio>
    <container title="Memory" id="CG_show">
      <template v-slot:right>
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
      </template>
      <template v-slot:content>
        
        <div class="list_box">
          <ul class="cg_list" v-show="CGStyle == 'list'">
            <li v-for="item in cg_single_list" class="cg_info" :key="item" @click="showCG(item)">

              
              <el-image lazy :src="StringToURL(item.coverURL).href">
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
            <el-carousel-item v-for="item in cg_list[0].list" :key="item" @click="showCG(item)">
              <div class="imgBox">
                <img :src="StringToURL(item.coverURL).href" alt=" ">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      
      </template>
    </container>

    <container title="Background" id="Background_list">
      <template v-slot:content>
        <div class="list_box">
          <ul class="cg_list">
            <li v-for="item in background_single_list" class="cg_info" :key="item" @click="showCG(item)">

              
              <el-image lazy :src="StringToURL(item.coverURL).href">
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
            <el-pagination background layout="prev, pager, next" @current-change="changeBackgroundPage"
              :total="background_list[0].list.length" />
          </ul>

        </div>
      </template>
    </container>
    
    <CGplayer v-show="isCGplayerShow"  @close="closeCG">
  
      <el-image :src="StringToURL(CGurl).href"  @click="nextCG">
        
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
      
    </CGplayer>

    <comment id="comment"></comment>

  </div>
</template>

<script>
import CGplayer from '@/components/common/cgplayer.vue'
import Button_one from '@/components/common/button_one.vue'
import Container from '@/components/context/home/container.vue'
import comment from '@/components/common/comment.vue'
import topNavbar from '@/components/common/topNavbar.vue';

import { useCounterStore } from '/src/store/index.js'
import { storeToRefs } from 'pinia'

import { StringToURL } from '/src/utils/index.js'

import {cg_list,background_list} from '/src/utils/cgList.js'


const store = useCounterStore()
let { systeam_voice } = storeToRefs(store)


export default {
  el: 'home',
  data() {
    return {
      //cg列表
      cg_list,
      cg_single_list: [],       //单页的CG列表
      list_count: 9,      //单页CG数量
      CGStyle: 'list',    //cg风格
      CGurl: '../assets/img/cover.jpg',
      childCG: [],
      CGindex: 0,
      isCGplayerShow:false,
  
      background_list,
      background_single_list:[],


      bgVideoIsLoading: false,

    }
  },
  components: {
    CGplayer,
    Button_one,
    Container,
    comment,
    topNavbar,

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
    changeBackgroundPage:function(index){
      this.background_single_list = this.background_list[0].list.slice((index - 1) * this.list_count, index * this.list_count)
    },
    
    playVoice:function(url){
      var audio = document.createElement('audio') 
      
      audio.src = url
      audio.autoplay = true
      audio.preload = true
      document.body.appendChild(audio) 
    }
  },
  created() {
    this.changeCGPage(1)
    this.changeBackgroundPage(1)
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
@import url('@/assets/css/Home/index.css');
</style>
