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
  
  const editedTime =  "today"
  const title = "hello"
  const tagArr = ['lqq','zxl']
  </script>
  <style lang="less">
  </style>
  