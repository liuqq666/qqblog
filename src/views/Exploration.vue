<template>
    <page-all>
    <template #main>
          <word-card :edited-time="editedTime" :title="title" :tagArr="tagArr"></word-card>
    </template>
    </page-all>
  </template>
  
  <script setup>
  // @ is an alias to /src
  import PageAll from '@/pages/PageAll.vue';
  import WordCard from '@/components/WordCard.vue';

  const editedTime =  "not today！"
  const title = "上线中，敬请期待"
  const tagArr = ['chatgpt','css展示平台','dtncms','...']
  </script>
  <style lang="less">
  </style>
  