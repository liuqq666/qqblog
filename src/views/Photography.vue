<template>
    <page-all>
      <template #main>
  <div class="tv dsj" >
  <div class="tv__screen"><div class="tv__audio">
        <div class="demo-image__lazy">
          <el-image v-for="(img, index) in imgArr" :key="index" :src="img" />
        </div>
      </div></div>
      <div class="qwer">
        <speaker class="a"/>
        <div class="tv__info">
            <h3>SONY</h3>
            <div class="tv__controls">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
          </div> 
        </div>
       <speaker class="d"/>
     </div>
 
</div>
        </template>
    </page-all>
  
  </template>
  
  <script setup>
  import PageAll from '@/pages/PageAll.vue';
  import Viewer from 'viewerjs'
  import 'viewerjs/dist/viewer.css'
  import { ref, onMounted} from 'vue'
  import request from '../api/request'
  import { ElMessage,ElImage } from 'element-plus';
  import speaker from '@/components/Speaker/index.vue'
  
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
    getImageArr();
    // openViewer(ViewerDom.value);
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
  
  <style lang="less" scoped>
.demo-image__lazy {
  height: 600px;
  width: 85%;
  border: solid;
  border-color: rgba(3, 7, 8, 0.961);
  border-width: 10px;
  border-radius: 10px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

::-webkit-scrollbar {

display: none; /* Chrome Safari */

}

.dsj{
    font-family: 'Kameron', serif;
    width: 90%;
    height: 800px;
    background: #999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 3px;
  }
  .tv__audio{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .qwer{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .d{
    margin-right: -24px;
  }
  .a{
    margin-left: -134px;
  }
  .tv__info{
    margin-right: -124px;
  }
  </style>