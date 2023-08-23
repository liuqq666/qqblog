<template>
    <page-all>
    <template #main>
        <v-md-preview class="qqq" :text="text"></v-md-preview>
    </template>
    </page-all>
  </template>
  
  <script setup>
  // @ is an alias to /src
  import PageAll from '@/pages/PageAll.vue';
  import { useRoute } from 'vue-router';
  import { ref,onBeforeMount } from 'vue';
  import request from '@/api/request'

  const uid = useRoute().params.uid;
  const text = ref('加载中...')

  onBeforeMount( async ()=>{
    try {
    const res = await request.getArticleMarkdown(uid);
    text.value = res.data.markdown;
  } catch (error) {
    console.error(error);
  }
  })
  </script>
  <style lang="less">
  .qqq {
    text-align: left;
  }
  </style>
  