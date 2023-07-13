<template>
    <div class="common-layout">
      <el-container direction="vertical">
        <DsHeader>Header</DsHeader>
        <DsMain>
            <slot name="main"></slot>
        </DsMain>
        <DsFooter>Footer</DsFooter>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import DsHeader from '@/pages/layouts/DsHeader.vue'
  import DsFooter from '@/pages/layouts/DsFooter.vue'
  import DsMain from '@/pages/layouts/DsMain.vue'

  </script>
  
  <style lang="less">
  // 样式省略
  </style>