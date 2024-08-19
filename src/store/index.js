import {defineStore } from 'pinia'

export const useCounterStore=defineStore('index',{
  state:()=>{
    return{
      isCGplayerShow:false,

    }
  }
})