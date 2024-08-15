<template>
  <div>
    <div class="title">
      <img src="">
    </div>
    <div id="aplayer" style="left: auto;width: 400px;opacity: .6;transition: .3s;">

    </div>
  </div>
  
</template>

<script>
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';

export default {
  el: '',
  data () {
    return {
      options:{
        audio:[
          {
            name: 'Days Of Love',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM20.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Days Of Love',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM20.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
          {
            name: 'Days Of Love',
            artist: '松本文纪',
            url: '/src/assets/bgm/BGM20.ogg',
            cover: '/src/assets/img/cover.jpg',
            lrc: '',
            theme: '#ebd0c2'
          },
        ],
        mini:false,
        fixed:true,
        autoplay:true,
        loop:'all',
        order:'list',
        preload:'auto',
        mutex: true,
        listFolded: true,
        listMaxHeight: 5,
        lrcType: 3,
        volume:.4,
            
        
      }
    }
  },
  methods: {

  },
  mounted(){
   
    const ap = new APlayer({
      container:document.getElementById('aplayer'),
      ...this.options
    });
    
  }
}
</script>

<style scoped lang="scss">

.aplayer:hover{
  opacity: 1 !important;
}

::v-deep .aplayer-list{
  transition: .3s !important;
}

::v-deep .aplayer-body{
 

 left: auto !important;
 width: 382px !important;
}



::v-deep .aplayer-info{
  display: block !important;
  
}

</style>
