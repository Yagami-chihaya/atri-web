import { defineStore } from 'pinia'


export const useCounterStore = defineStore('index', {
  state: () => {
    return {
      isCGplayerShow: false,
      isLogin: false,
      aPlayer: {},  //音乐播放器
      systeam_voice: [],  //系统声音
    }
  }
})