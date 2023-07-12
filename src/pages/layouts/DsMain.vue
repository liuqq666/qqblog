<!--
  博客默认中间关于
-->
<template>
  <div>
    <el-main style="height: 100%;">
        <el-container>
        <el-aside width="15%"></el-aside>
        <el-main style="height: 100%;">       
            <slot>
            </slot>
        </el-main>
        <el-aside width="15%"></el-aside>
      </el-container>
  </el-main>
</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const currentDate = ref(new Date())
  </script>
  
  <style lang="less">
  </style>
  