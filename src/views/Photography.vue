<template>
    <div class="common-layout">
      <el-container direction="vertical">
        <DsHeader>Header</DsHeader>
        <DsMain>
          <ul ref="ViewerDom">
            <li v-for="(img, index) in imgArr" :key="index">
              <img :src="img" />
            </li>
          </ul>
        </DsMain>
        <DsFooter>Footer</DsFooter>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import DsHeader from '@/pages/layouts/DsHeader.vue'
  import DsFooter from '@/pages/layouts/DsFooter.vue'
  import DsMain from '@/pages/layouts/DsMain.vue'
  import Viewer from 'viewerjs'
  import 'viewerjs/dist/viewer.css'
  import { ref, onMounted } from 'vue'
  
  const imgArr = [
    '/static/img/jishu.jpg',
    '/static/img/sheyin.jpg',
    '/static/img/wenxue.jpg',
    '/static/img/shiyanshi.jpg'
  ];
  // 获取 dom对象
  const ViewerDom = ref(null);
  // 定义初始化方法
  onMounted(() => {
    openViewer(ViewerDom.value);
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
  // 样式省略
  </style>