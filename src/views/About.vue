<template>
    <page-all>
    <template #main>
      <div class="ab">
        <el-card class="card"><about-header /> </el-card>
        <el-card class="card">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="关于我" name="first">

              <div class="custom-div">一个理想主义者</div>

              <div class="custom-div">崇拜技术</div>

              <div class="custom-div">热爱篮球</div>

              <div class="custom-div">陶醉于逻辑和浪漫</div> 

              <div class="custom-div">感谢关注</div> 
            </el-tab-pane>
            <el-tab-pane label="个人公众号" name="second">
              <div class="custom-div">青藤门下狗</div>
                <div class="container">
                    <img  src="../../public/static/img/gongzhonghao.png" class="avtar"/>
                </div>
            </el-tab-pane>
            <el-tab-pane label="交个朋友吧" name="third">
              <div class="custom-div">微信</div>
                <div class="container">
                    <img  src="../../public/static/img/weixinhao.png" class="avtar"/>
                </div>
            </el-tab-pane>
  </el-tabs>
        </el-card>
      </div>
    </template>
    </page-all>
  </template>
  
  <script setup>
  // @ is an alias to /src
  import PageAll from '@/pages/PageAll.vue';
  import AboutHeader from '@/components/AboutHeader.vue';
  import { ref } from 'vue';

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

  </script>
  <style scoped lang="less">
  .card {
      margin-bottom: 15px;
  }

.avtar {
      width: 100px;
      height: 100px;
      border: 10px solid rgb(58, 164, 230);
      border-radius: 10%;
      margin: 0;
  }
  .container {
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 0;
}
  .custom-div {
      font-family: Arial, sans-serif; 
      font-size: 24px; 
      margin-top: 20px; 
      margin-bottom: 20px; 
    }
    .ab{
      width: 100%;
    }
  </style>
  