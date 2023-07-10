<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <DsHeader>Header</DsHeader>
      <DsMain>
        <el-row :gutter="10">
          <el-col>
          <DsCard src="../assets/img/logo.png"></DsCard>
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

</script>
<style lang="less">
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
