<template>
        <el-card :body-style="{ padding: '0px' }" @click="goTo(link)">
          <img
            :src= src
            class="image"
            alt="no show img"
            :width= "width"
            :height= "height"
          />
          <div class="topic">
                <p><slot name="btnName">主题</slot></p>
          </div>
          <div class="bottom">
                <p><slot name="word"></slot></p>
          </div>
        </el-card>
  </template>
  
 
    <script setup>
    import { defineProps } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const props = defineProps({
    src:String,
    link:{
      type:String,
      default:'/'
    }
  })
  //图片的宽高
    const width = "200";
    const height = "300";
    
    const goTo = (link) => {
      router.push(link)
    }

  </script>
  <style>
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .topic {
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 12px;
    padding: 0px;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .bottom {
    margin-top: 0px;
    line-height: 12px;
    padding: 0px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  </style>
  