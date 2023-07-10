<template>
        <el-card :body-style="{ padding: '0px' }">
          <img
            :src= src
            class="image"
            alt="no show img"
            :width= "width"
            :height= "height"
          />
          <div style="padding: 14px">
            <slot name="word"></slot>
            <div class="bottom">
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
  </template>
  
 
    <script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
    src:String,
  })
    const width = "200";
    const height = "300";
  </script>
  <style>
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  </style>
  