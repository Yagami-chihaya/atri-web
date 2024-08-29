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
    site: 'Artalk 的博客',
    // ...
  })
})

onBeforeUnmount(() => {
  artalk.destroy()
})
</script>

<template>
  <view ref="el"></view>
</template>