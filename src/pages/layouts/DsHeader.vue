<!--
  博客默认顶部菜单栏
-->

  <template>
    <el-header class="blog-header">
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
      <el-menu-item index="6"  class="qqqq">
        <router-link to="/about" >关于</router-link> 
      </el-menu-item>
    </div>
    <el-sub-menu collapse-close-icon index="7" class="q">
      <template #title>...</template>
      <el-menu-item  index="7-1"><router-link to="/login" >管理员登录</router-link> </el-menu-item>
      <el-menu-item  index="7-2"><router-link to="/uploadImg" >上传照片</router-link> </el-menu-item>
      <el-menu-item  index="7-3"><router-link to="/uploadArticle" >上传文章</router-link></el-menu-item>
      </el-sub-menu>
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
  
  <style lang="less" scoped>
  .flex-grow {
  width: 500px;
  display: flex;
  justify-content :flex-end; /* 水平居中对齐 */
  align-items: center;
}
  .el-menu-item {
    padding: 5px;
    margin-right: 50px;
    &::before{
      content: "   ";
    }
    &::after{
      content: "     ";
    }
  }
  .el-sub-menu{
    padding: 5px;
    margin-right: 50px;
    &::before{
      content: "   ";
    }
    &::after{
      content: "     ";
    }
  }
  
  .is-active{
    color: #d0ebde;
  }

  a {
    text-decoration: none;
    color: #2c7f87;
    &:hover{
      color: #000;
    }
  }
  .router-link-active {
    color: #03c2c2;
    text-decoration:underline;
}
  .el-menu-demo{
    display: flex;
    justify-content: space-between
  }
  .qqqq{
    margin-right: 100px;
  }
  img{
    &:hover{
      cursor: pointer;
    }
  }
  .blog-header{
    position: relative;
        width: 100%;
        height: 60px;   
  }
  .q{
    left: 0;
  }
  </style>
  