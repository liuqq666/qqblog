<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <DsHeader>Header</DsHeader>
      <DsMain>
        <img src="../../public/static/img/404.png"  class="full-width-image" alt="notfound">
      </DsMain>
      <DsFooter>Footer</DsFooter>
    </el-container>
  </div>
</template>

<script setup>
// @ is an alias to /src
import DsHeader from '@/pages/layouts/DsHeader.vue'
import DsFooter from '@/pages/layouts/DsFooter.vue'
import DsMain from '@/pages/layouts/DsMain.vue'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const backToHome = () => {
  router.push('/')
}

onMounted(() => {
  setTimeout(() => {
    backToHome();
  }, 3000)
})

</script>
<style lang="less">
.el-col {
  border-radius: 4px;
}
.el-row {
  margin-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.full-width-image {
  width: 100%;
  height: 100%;
}
</style>
