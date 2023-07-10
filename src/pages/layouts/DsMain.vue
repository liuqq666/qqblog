<!--
  博客默认中间关于
-->
<template>
    <el-main>
        <el-container>
        <el-aside width="200px"></el-aside>
        <el-main>       
            <slot>
            </slot>
        </el-main>
        <el-aside width="200px"></el-aside>
      </el-container>
  </el-main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const currentDate = ref(new Date())
  </script>
  
  <style lang="less">
  </style>
  