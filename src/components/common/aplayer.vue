<template>
  <div class="minePlayer">
    <div class="title">
      <img @error="imgError" :src="StringToURL(title_img_url).href">
    </div>
    <div id="aplayer" style="left: auto;width: 400px;">

    </div>

  </div>

</template>

<script>
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';


import { useCounterStore } from '/src/store/index.js'
import { storeToRefs } from 'pinia'


import { StringToURL } from '../../utils'

export default {
  el: '',
  data() {
    return {
      player: {},
      title_img_index: 1,
      options: {
        audio: [
          {
            name: 'Days Of Love',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM20.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Dear Moments',
            artist: '赤尾ひかる',
            url: '/src/assets/bgm/ed.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: '光放て！ - (绽放光芒！)',
            artist: '柳麻美',
            url: '/src/assets/bgm/op_short.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'The Sunken City',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM01.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Hope\'s Light',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM02.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Tranquil Moments',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM03.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Vertigo',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM04.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'The Face I See When I Close My Eyes',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM05.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'The Happy Little Killer Robot',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM06.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Good Morning, Sunshine',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM07.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'The Brink Of Death',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM08.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Walking In The Twilight',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM09.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'A Soothing Breeze',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM10.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Working',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM11.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Halation',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM12.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Dumb Heap Of Scrap!',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM13.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'The Children Play',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM14.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'A Lull In The Sea',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM15.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Weigh Anchor!',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM16.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Shadowy Footsteps',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM17.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: '镌刻日常',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM18.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: '泪水闪耀的瞬间',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM19.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },

        ],

        mini: false,
        fixed: true,
        autoplay: true,
        loop: 'all',
        order: 'list',
        preload: 'auto',
        mutex: true,
        listFolded: true,
        listMaxHeight: 5,
        lrcType: 3,
        volume: .4,


      }
    }
  },
  computed: {
    title_img_url() {

      return '/src/assets/img/bgm_title/bgmtitle_bgm' + this.title_img_index + '_cn.png'

    }
  },

  methods: {
    initPlayer: function () {
      return new Promise((resolve, reject) => {
        const player = new APlayer({
          container: document.getElementById('aplayer'),
          ...this.options
        });

        player.audio.autoplay = true
        resolve(player)

      })

    },
    imgError: function (e) {
      e.target.src = ''
    },
    StringToURL,

  },

  mounted() {
    let vm = this
    let minePlayer = document.getElementsByClassName('minePlayer')[0]
    let titleDOM = minePlayer.querySelector('.title')

    const store = useCounterStore()
    const { aPlayer } = storeToRefs(store)

    

    this.initPlayer().then(player => {

      aPlayer.value = player
      titleDOM.animate([

        { transform: 'translateX(-30px)', opacity: .5, offset: 0 },
        { transform: 'translateX(0)', opacity: 1, offset: .3 },
        { transform: 'translateX(0)', opacity: 1, offset: .7 },
        { transform: 'translateX(600px)', opacity: 0, offset: 1 }
      ], 5000)


      player.on('listswitch', function (e) {
        vm.title_img_index = e.index + 1
        //切换动画
        titleDOM.animate([

          { transform: 'translateX(-30px)', opacity: .5, offset: 0 },
          { transform: 'translateX(0)', opacity: 1, offset: .2 },
          { transform: 'translateX(0)', opacity: 1, offset: .7 },
          { transform: 'translateX(600px)', opacity: 0, offset: 1 }
        ], 3000)
      });
    })
  }
}
</script>

<style scoped lang="scss">
.minePlayer {
  transition: .3s !important;
  opacity: .6;
  z-index: 3;
  position: relative;
}

.minePlayer:hover {
  opacity: 1 !important;
}

.title {
  position: fixed;
  bottom: 60px;
  right: 0;
  width: 400px;
  border-radius: 5px;
  opacity: 0;
}


::v-deep .aplayer-body {


  left: auto !important;
  width: 382px !important;
}



::v-deep .aplayer-info {
  display: block !important;

}
</style>
