<template>
  <page-all>
    <template #main>
        <el-row gutter="20">
          <el-col :span="12">
          <DsCard :src="imgArr[0]" link="/technology">
            <template #word>科技的力量在于将想象变为现实</template>
            <template #btnName>技术</template>
          </DsCard>
          </el-col>
          <el-col :span="12">
          <DsCard :src="imgArr[1]" link="/Photography">
            <template #word>喜欢摄影，不如说热爱生活</template>
            <template #btnName>摄影</template></DsCard>
          </el-col>
        </el-row>
        <el-row gutter="20" >
          <el-col :span="12">
          <DsCard :src="imgArr[2]" link="/literature">
            <template #word>O Captain! My Captain!</template>
            <template #btnName>文学</template></DsCard>
          </el-col>
          <el-col :span="12">
          <DsCard :src="imgArr[3]" link="/exploration">
            <template #word>勇往直前，才能发现新的边界</template>
            <template #btnName>探索</template></DsCard>
          </el-col>
        </el-row>
      </template>
      </page-all>
</template>

<script setup>
// @ is an alias to /src
import PageAll from '@/pages/PageAll.vue';
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
