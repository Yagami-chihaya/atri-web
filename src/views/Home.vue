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
            <li v-for="item in cg_list[0].list" class="cg_info" :key="item" @click="showCG(item)">
              <img :src="StringToURL(item.coverURL).href" alt=" ">
            </li>
            <el-pagination background layout="prev, pager, next" :total="1000" />
          </ul>
          <el-carousel v-show="CGStyle" class="cg_card" :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in cg_list[0].list" :key="item" @click="showCG(item)">
              <div class="imgBox">
                <img :src="StringToURL(item.coverURL).href" alt=" ">
              </div>
              
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>


    </div>
    <CGplayer v-show="isCGplayerShow">
      
      <img :src="StringToURL(CGurl).href" @click="nextCG">
    </CGplayer>
  </div>
</template>

<script>
import CGplayer from '@/components/common/cgplayer.vue'
import Button_one from '@/components/common/button_one.vue'

import { useCounterStore } from '/src/store/index.js'
import { storeToRefs } from 'pinia'

import {StringToURL} from '/src/utils/index.js'

const store = useCounterStore()
const {isCGplayerShow} = storeToRefs(store)
console.log(isCGplayerShow,'store')  

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
              coverURL:"https://img.picgo.net/2024/08/09/ev000al7d5c8f298a09b64d.md.jpg",
              url: "https://img.picgo.net/2024/08/09/ev000al7d5c8f298a09b64d.jpg",
              children: [

              ]
            },
            {
              id: 1,
              coverURL:"https://img.picgo.net/2024/08/09/ev001aldfb66c3d149bd6d5.md.png",
              url: "https://img.picgo.net/2024/08/09/ev001aldfb66c3d149bd6d5.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev001bl6420e9a6243f755a.png",
                "https://img.picgo.net/2024/08/09/ev001clbd4c9208fa95b61c.png",
              ]
            },
            {
              id: 2,
              coverURL:"https://img.picgo.net/2024/08/09/ev002al50e8b3a55193f75d.md.png",
              url: "https://img.picgo.net/2024/08/09/ev002al50e8b3a55193f75d.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev002bl2a7d63c10b9c3819.png",
              ]
            },
            {
              id: 3,
              coverURL:"https://img.picgo.net/2024/08/09/ev003al81372ddfef4f8bfc.md.png",
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
              coverURL:"https://img.picgo.net/2024/08/09/ev004al1f51489f7b23db97.md.png",
              url: "https://img.picgo.net/2024/08/09/ev004al1f51489f7b23db97.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev004bldcd0d2f5a13aa5ed.png",
              ]
            },
            {
              id: 5,
              coverURL:"https://img.picgo.net/2024/08/09/ev005al63d7fb212b65f517.md.png",
              url: "https://img.picgo.net/2024/08/09/ev005al63d7fb212b65f517.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev005bl3aafa2bf5a681213.png",
                "https://img.picgo.net/2024/08/09/ev005cl3c56e66a6d7d9cfa.png",
              ]
            },
            {
              id: 6,
              coverURL:"https://img.picgo.net/2024/08/09/ev006alf256c7859e44f0be.md.png",
              url: "https://img.picgo.net/2024/08/09/ev006alf256c7859e44f0be.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev006bl91db0ede1ad7be0c.png",
              ]
            },
            {
              id: 7,
              coverURL:"https://img.picgo.net/2024/08/09/ev007alfa9ec5c48286aada.md.png",
              url: "https://img.picgo.net/2024/08/09/ev007alfa9ec5c48286aada.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev007blfe640a0b7b432789.png",
              ]
            },
            {
              id: 8,
              coverURL:"https://img.picgo.net/2024/08/09/ev008al5640fdc350781649.md.png",
              url: "https://img.picgo.net/2024/08/09/ev008al5640fdc350781649.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev008blede18c5ecbc3e8f6.png",
                "https://img.picgo.net/2024/08/09/ev008clf9584d32c2101ce5.png"
              ]
            },
            {
              id: 9,
              coverURL:"https://img.picgo.net/2024/08/09/ev009al3790029e482a2be3.md.png",
              url: "https://img.picgo.net/2024/08/09/ev009al3790029e482a2be3.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev009bl41e4a04f7206245c.png",
               
              ]
            },
            {
              id: 10,
              coverURL:"https://img.picgo.net/2024/08/09/ev010ale6cc7265ee65c721.md.png",
              url: "https://img.picgo.net/2024/08/09/ev010ale6cc7265ee65c721.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev010blb2510e437110348f.png",
           
              ]
            },
            {
              id: 11,
              coverURL:"https://img.picgo.net/2024/08/09/ev011alf59aaea4eebcd998.md.png",
              url: "https://img.picgo.net/2024/08/09/ev011alf59aaea4eebcd998.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev011bl7d9c368f8c938c74.png",
                "https://img.picgo.net/2024/08/09/ev011cl87ce67f06e027a5b.png"
              ]
            },
            {
              id: 12,
              coverURL:"https://img.picgo.net/2024/08/09/ev012alfc03ed3e5a3a20e1.md.png",
              url: "https://img.picgo.net/2024/08/09/ev012alfc03ed3e5a3a20e1.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev012bl105dd9b9297304c8.png",
                "https://img.picgo.net/2024/08/09/ev012claa938c2f4c7c7238.png"
              ]
            },
            {
              id: 13,
              coverURL:"https://img.picgo.net/2024/08/09/ev013ald4e18c4444acd3ae.md.png",
              url: "https://img.picgo.net/2024/08/09/ev013ald4e18c4444acd3ae.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev013blaf15e6e2bf6d34df.png",
           
              ]
            },
            {
              id: 14,
              coverURL:"https://img.picgo.net/2024/08/09/ev014al36ff310ac269329c.md.png",
              url: "https://img.picgo.net/2024/08/09/ev014al36ff310ac269329c.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev014bla040b74df874ea7a.png",
           
              ]
            },
            {
              id: 15,
              coverURL:"https://img.picgo.net/2024/08/09/ev015ala29479487eb6fc6c.md.png",
              url: "https://img.picgo.net/2024/08/09/ev015ala29479487eb6fc6c.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev015bl3fdb4cb02ce9a2bb.png",
                "https://img.picgo.net/2024/08/09/ev015cl64eb5d9d136ad07b.png"
              ]
            },
            {
              id: 16,
              coverURL:"https://img.picgo.net/2024/08/09/ev016al7da9e96ad08ea9d8.md.png",
              url: "https://img.picgo.net/2024/08/09/ev016al7da9e96ad08ea9d8.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev016bl08c3a2a2d6d7f4b9.png",
        
              ]
            },
            {
              id: 17,
              coverURL:"https://img.picgo.net/2024/08/09/ev017ald5aeec49823e5840.md.png",
              url: "https://img.picgo.net/2024/08/09/ev017ald5aeec49823e5840.png",
              children: [

              ]
            },
            {
              id: 18,
              coverURL:"https://img.picgo.net/2024/08/09/ev018al4e997679f0590713.md.png",
              url: "https://img.picgo.net/2024/08/09/ev018al4e997679f0590713.png",
              children: [

              ]
            },
            {
              id: 19,
              coverURL:"https://img.picgo.net/2024/08/09/ev019al4a6a6a1552f2ccf0.md.png",
              url: "https://img.picgo.net/2024/08/09/ev019al4a6a6a1552f2ccf0.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev019bla8738f29d550d263.png",

              ]
            },
            {
              id: 20,
              coverURL:"https://img.picgo.net/2024/08/09/ev020al4d18a90c84936bf4.md.png",
              url: "https://img.picgo.net/2024/08/09/ev020al4d18a90c84936bf4.png",
              children: [
              ]
            },
            {
              id: 21,
              coverURL:"https://img.picgo.net/2024/08/09/ev021ald6669b48a1aa7c02.md.png",
              url: "https://img.picgo.net/2024/08/09/ev021ald6669b48a1aa7c02.png",
              children: [

              ]
            },
            {
              id: 22,
              coverURL:"https://img.picgo.net/2024/08/09/ev101al4841996aae983cef.md.png",
              url: "https://img.picgo.net/2024/08/09/ev101al4841996aae983cef.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev101bl245826b7729a20bb.png"
              ]
            },
            {
              id: 23,
              coverURL:"https://img.picgo.net/2024/08/09/ev102al5a3e9f55d1f76fe9.md.png",
              url: "https://img.picgo.net/2024/08/09/ev102al5a3e9f55d1f76fe9.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev102bl9b018715491caa4b.png"
              ]
            },
            {
              id: 24,
              coverURL:"https://img.picgo.net/2024/08/09/ev103ala97b64a9f3f0ce3b.md.png",
              url: "https://img.picgo.net/2024/08/09/ev103ala97b64a9f3f0ce3b.png",
              children: [
                "https://img.picgo.net/2024/08/09/ev103bl8817ca26d158435a.png",
                "https://img.picgo.net/2024/08/09/ev103cl1ee6a7ba60dfeb41.png"
              ]
            },
            {
              id: 25,
              coverURL:"https://img.picgo.net/2024/08/09/sd001a26e3d8b827956df5.md.png",
              url: "https://img.picgo.net/2024/08/09/sd001a26e3d8b827956df5.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd001be0aed125e62df66d.png",
                "https://img.picgo.net/2024/08/09/sd001cfbaa6f2b0c234315.png"
              ]
            },
            {
              id: 26,
              coverURL:"https://img.picgo.net/2024/08/09/sd002ad060ecd447faf480.md.png",
              url: "https://img.picgo.net/2024/08/09/sd002ad060ecd447faf480.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd002bc97dadaddb1ecff9.png",
               
              ]
            },
            {
              id: 27,
              coverURL:"https://img.picgo.net/2024/08/09/sd003a0bf549ab062136c2.md.png",
              url: "https://img.picgo.net/2024/08/09/sd003a0bf549ab062136c2.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd003b9911de75b848fd14.png",
                "https://img.picgo.net/2024/08/09/sd003c5907beb138e53a1e.png"
              ]
            },
            {
              id: 28,
              coverURL:"https://img.picgo.net/2024/08/09/sd004a1ef7089b07c4864c.md.png",
              url: "https://img.picgo.net/2024/08/09/sd004a1ef7089b07c4864c.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd004bed6e71d10e016b6a.png",
          
              ]
            },
            {
              id: 29,
              coverURL:"https://img.picgo.net/2024/08/09/sd005a0825ed01c69c5f09.md.png",
              url: "https://img.picgo.net/2024/08/09/sd005a0825ed01c69c5f09.png",
              children: [
                "https://img.picgo.net/2024/08/09/sd005b70c068cb975bcb3c.png",
                "https://img.picgo.net/2024/08/09/sd005c5cfb180d15263505.png"
              ]
            },
            {
              id: 30,
              coverURL:"https://img.picgo.net/2024/08/09/sd006a79c7aaf447aa0900.md.png",
              url: "https://img.picgo.net/2024/08/09/sd006a79c7aaf447aa0900.png",
              children: [

          
              ]
            },
            {
              id: 31,
              coverURL:"https://img.picgo.net/2024/08/09/title_base8c69345d0600c787.md.png",
              url: "https://img.picgo.net/2024/08/09/title_base8c69345d0600c787.png",
              children: [
                "https://img.picgo.net/2024/08/09/title_base223d2708d7c4dc262.png",
          
              ]
            },
          
            
          ]



        }
      ],
      CGStyle: false,
      CGurl:'',
      childCG:[],
      CGindex:0,
      isCGplayerShow,
    }
  },
  components: {
    CGplayer,
    Button_one,

  },
  methods: {
    StringToURL,
    showCG: function(item){
      isCGplayerShow.value = true
      this.CGurl = item.url
      console.log(item,'CGURL')
      this.childCG = item.children
    },
    nextCG:function(){
      console.log(this.CGindex,'cgindex')
      console.log(this.childCG,'childCG');
      
      if(this.CGindex<this.childCG.length){
        console.log('if')
        this.CGurl = this.childCG[this.CGindex]
        this.CGindex++
      }else{
        isCGplayerShow.value = false
        this.CGindex = 0
      }
      
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
    width: 94%;
    margin: 0 auto;
    padding: 2rem 0;
  }
}


#CG_show {

  .list_box {
    
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

.cgPlayer{
  img{
    width: 100%;
    
  }
}
</style>
