<template>
  <view ref="el"></view>
</template>

<script lang="ts" setup>
import Artalk from 'artalk'
import { onMounted, onBeforeUnmount, ref } from 'vue'

import 'artalk/dist/Artalk.css'

const el = ref<HTMLElement>()

let artalk: Artalk

onMounted(() => {
  artalk = Artalk.init({
    el: el.value,
    pageKey: location.pathname,
    pageTitle: `${document.title}`,
    server: 'http://127.0.0.1:8080',
    site: 'ATRI Web',
    // ...
  })

  console.log(artalk.getEl,'artalk')
})

onBeforeUnmount(() => {
  artalk.destroy()
})
</script>

<style scoped lang="scss">
  .artalk {
    position: relative;
    width: 90%;
    padding: 5%;
    min-height: 200px;
    display: block;
  }
  ::v-deep .atk-list-footer {
    display: none !important;
  }
</style>
