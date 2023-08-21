<template>
    <page-all>
    <template #main>
          <upload></upload>
    </template>
    </page-all>
  </template>
  
  <script setup>
  // @ is an alias to /src
  import PageAll from '@/pages/PageAll.vue';
  import Upload from '@/components/Upload.vue';


  </script>

  <style lang="less">
  .el-col {
    border-radius: 4px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .full-width-image {
    width: 100%;
    height: 100%;
  }
  </style>
  