<!--
  博客默认底部关于
-->

<template>
    <el-divider border-style="double" />
    <el-footer>
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button text="true"  class="el-button" @click="navigateToAbout">
      关于
      </el-button>  
      </div>
      <div class="footer">
      Powered by DoubleStrong
      </div>
    </el-footer>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  function navigateToAbout() {  
      router.push('/about');
    }
  </script>
  
  <style lang="less">
  .el-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex{
    display: flex;
    justify-content: center;
  }

  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  color: #333;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  }

  </style>
  