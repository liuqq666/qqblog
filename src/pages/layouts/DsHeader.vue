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
    <img src="../../../public/static/img/logo.png" width="150" height="70" @click="goTo"/>
    <div class="flex-grow">
      <el-menu-item index="1">
         <router-link to="/">主页</router-link>
      </el-menu-item> 
      <el-menu-item index="2">
         <router-link to="/technology"  >技术</router-link>
      </el-menu-item> 
      <el-menu-item index="3"> 
         <router-link to="/photography" >摄影</router-link> 
      </el-menu-item> 
      <el-menu-item index="4"> 
        <router-link to="/literature" >文学</router-link>
      </el-menu-item> 
      <el-menu-item index="5">
         <router-link to="/exploration" >探索</router-link> 
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="/about" >关于</router-link> 
      </el-menu-item>
    </div>
  </el-menu>
    </el-header>
  </template>

  
  <script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const goTo = () => {
    router.push('/')
    }
  </script>
  
  <style lang="less">
  .flex-grow {
  flex-grow: 1;
  display: flex;
  justify-content: center; /* 水平居中对齐 */
  align-items: center;
  }
  .router-link-active {
  text-decoration: none;
  color: #0c64df;
}
  a {
    text-decoration: none;
    color: #0c64df;
  }

  </style>
  