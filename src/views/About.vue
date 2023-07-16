<template>
    <page-all>
    <template #main>
        <el-card class="card"><about-header /> </el-card>
        <el-card class="card">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="关于我" name="first">关于我</el-tab-pane>
            <el-tab-pane label="个人公众号" name="second">
                <div class="container">
                    <img  src="../../public/static/img/gongzhonghao.png" class="avtar"/>
                </div>
            </el-tab-pane>
            <el-tab-pane label="交个朋友吧" name="third">
                <div class="container">
                    <img  src="../../public/static/img/weixinhao.png" class="avtar"/>
                </div>
            </el-tab-pane>
  </el-tabs>
        </el-card>
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
  <style scoped>
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
  </style>
  