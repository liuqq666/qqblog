<template>
    <el-card class="box-card" @click="goTo(link)">
      <template #header>
        <div class="card-header">
          <span>{{ title || '无标题' }}</span>
          <span class="text">Edited Time: {{ editedTime || '无时间' }}</span>
        </div>
      </template>
      <div>
      <el-tag v-for="(value,index) in tagArr" effect="light" class="tag-item" round="true" :key="index">{{ value }}</el-tag>
    </div>
    </el-card>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  defineProps({
    editedTime: String,
    title: String,
    tagArr: Array,
    link: {
        type: String,
        default: '/'
    }
  });
  const goTo = (link) => {
      router.push(link)
    }
  

  </script>
  
  <style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
  
  .text {
    font-size: 14px;
  }
  
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
  }

.tag-item {
  margin-right: 30px; /* 设置标签之间的右间距 */
  float: left;
  margin-bottom: 18px ;
}
  </style>
  