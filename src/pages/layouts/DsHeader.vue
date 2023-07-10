<!--
  博客默认顶部菜单栏
-->

  <template>
    <el-header>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <img :src="logo" width="150" height="70" />
    <img src="@/assets/img/jishu.jpg">
    <div class="flex-grow">
    <el-menu-item index="1" class="menu-item"> 主页 </el-menu-item>
    <el-menu-item index="2">技术</el-menu-item>
    <el-menu-item index="3">摄影</el-menu-item>
    <el-menu-item index="4">文学</el-menu-item>
    <el-menu-item index="5">探索</el-menu-item>
    <el-menu-item index="6">关于</el-menu-item>
    </div>
  </el-menu>
    </el-header>
  </template>
  
  <script setup>
  //import logo from '@/assets/img/logo.png'
  const logo = require('@/assets/img/logo.png')
  </script>
  
  <style lang="less">
  .flex-grow {
  flex-grow: 1;
  display: flex;
  justify-content: center; /* 水平居中对齐 */
  align-items: center;
}
  .menu-item {
    font-size: 50px;
  }
  </style>
  