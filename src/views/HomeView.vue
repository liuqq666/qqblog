<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <DsHeader>Header</DsHeader>
      <DsMain>
        <el-row gutter="20">
          <el-col :span="12">
          <DsCard :src="imgArr[0]">
          <template #word>科技的力量在于将想象变为现实</template>
          </DsCard>
          </el-col>
          <el-col :span="12">
          <DsCard :src="imgArr[1]"></DsCard>
          </el-col>
        </el-row>
        <el-row gutter="20">
          <el-col :span="12">
          <DsCard :src="imgArr[2]"></DsCard>
          </el-col>
          <el-col :span="12">
          <DsCard :src="imgArr[3]"></DsCard>
          </el-col>
        </el-row>
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
import DsCard from '@/components/DsCard.vue'

  const imgArr = ['/static/img/jishu.jpg','/static/img/sheyin.jpg',
                  '/static/img/wenxue.jpg','/static/img/shiyanshi.jpg']
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
</style>
