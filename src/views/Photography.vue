<template>
    <page-all>
      <template #main>
          <ul ref="ViewerDom">
            <li v-for="(img, index) in imgArr" :key="index">
              <img :src="img" />
            </li>
          </ul>
          ...
        </template>
    </page-all>
  
  </template>
  
  <script setup>
  import PageAll from '@/pages/PageAll.vue';
  import Viewer from 'viewerjs'
  import 'viewerjs/dist/viewer.css'
  import { ref, onMounted} from 'vue'
  import request from '../api/request'
  import { ElMessage } from 'element-plus';
  
  const imgArr = ref([]);
  //从mongo获取 图片列表
  const getImageArr = async()=>{
    try{ 
    const res = await request.getImages(1,10);
    const result = res.data.map((v)=>{
      return `data:image/jepg;base64,${v}`;
    })
    console.log("图片数组为:",result);
    imgArr.value = result;
    }catch(e){
      ElMessage.error(e);
    }

  }
  // 获取 dom对象
  const ViewerDom = ref(null);
  // 定义初始化方法
  onMounted(() => {
    openViewer(ViewerDom.value);
    getImageArr();
  })
  const openViewer = (dom) => {
    const viewer = new Viewer(dom, {
      initialViewIndex: 0,
      button: true,
      navbar: 2,
      title: 0,
      toolbar: 0,
      keyboard: false,
      ready: function (e) {
        console.log(e.type);
      },
      // 其他事件监听...
    });
  }
  
  </script>
  
  <style lang="less">
  ul {
      list-style: none; /* Remove default bullet point */
      padding-left: 0; /* Remove default left padding */
    }
  </style>