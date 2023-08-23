<template>
  <PageAll>
    <template #main>
        <div>
          <ElTable :data="tableData" show-header=false >
            <!-- 列定义 -->
            <ElTableColumn  width="1000px">
              <template v-slot="{ row }">
                <WordCard :link="'article/'+row.uid" :edited-time="row.date" :title="row.name" :tagArr="row.type"></WordCard>
              </template>
            </ElTableColumn>
          </ElTable>
          <div>
            <ElPagination
              class="qwer"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 50]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalItems"
            ></ElPagination>
        </div>
        </div>
    </template>
  </PageAll>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import PageAll from '@/pages/PageAll.vue';
    import WordCard from '@/components/WordCard.vue';
    import { ElMessage,ElTable,ElTableColumn,ElPagination } from 'element-plus';
    import request from '@/api/request';

    const tableData = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = ref(0);
    
    // 请求数据,从mongo获取 图片列表
  const getArticlesList = async()=>{
    try{
    const res = await request.getArticlesList((currentPage.value-1)*pageSize.value,pageSize.value);
    tableData.value = res.data.list;
    totalItems.value = res.data.totalCount;
    }catch(e){
      ElMessage.error(e);
    }

  }
    // 处理分页切换
    const handleSizeChange = (newSize) => {
      pageSize.value = newSize;
      getArticlesList();
    };
    
    const handleCurrentChange = (newPage) => {
      currentPage.value = newPage;
      getArticlesList();
    };
    
    // 初始化加载数据
    onMounted(() => {
      getArticlesList();
    });
    </script>
    <style lang="less" scoped>
    .qwer{
      display: flex;
      justify-content: flex-end;
    }
    </style>
  