<template>
  <div>
    <div class="Banner">
      <div class="title">ATRI</div>
    </div>
    <div class="cg_show">
      <ul class="cg_list">
        <li v-for="item in cg_list[0].list" class="cg_info" :key="item" @click="showCG(item.coverURL)">
          <img :src="StringToURL(item.url).href" alt=" ">
        </li>
      </ul>
    </div>
    <CGplayer v-show="isCGplayerShow">
      <img :src="CGurl">
    </CGplayer>
  </div>
</template>

<script>
import CGplayer from '@/components/common/cgplayer.vue'
import { useStore } from '../store/index.js'


const store = useStore()


export default {
  el: 'home',
  data() {
    return {
      cg_list:[
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
      ]
    
    }
  },
  components: {
    CGplayer,

  },
  methods: {
    showCG: (url) => {
      store.isCGplayerShow = true
      this.CGurl = url
    },
    StringToURL:(myurl)=>{
      console.log('myurl',myurl);
      console.log('myurl',new URL(myurl,import.meta.url));
      
      
      return new URL(myurl,import.meta.url)
    }
  },
}
</script>

<style scoped lang="scss">
.cg_show{
  width: 100%;
  
  background: rgba(0, 0, 0, 0.637);
  .cg_list{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    li{
      border: 1px solid lightgrey;
      list-style: none;
      width: 22rem;
      height: 11rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 1rem;
      img{
        width: 22rem;
      }
    }
  }
}

</style>
