<template>
  <PageAll>
      <div>
        <el-table :data="tableData" border>
          <!-- 列定义 -->
          <el-table-column label="数据" width="100%">
            <template v-slot="{ row }">
              <WordCard :edited-time="row.editedTime" :title="row.title" :tagArr="row.tagArr"></WordCard>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalItems"
        ></el-pagination>
      </div>
    </PageAll>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import PageAll from '@/pages/PageAll.vue';
    import WordCard from '@/components/WordCard.vue';

    const tableData = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = ref(0);
    
    // 请求数据,从mongo获取 图片列表
  const getArticlesList = async()=>{
    try{ 
    const res = await request.getArticlesList(currentPage,pageSize);
    tableData.value = res.list;
    totalItems.value = response.totalCount;
    }catch(e){
      ElMessage.error(e);
    }

  }
    // 处理分页切换
    const handleSizeChange = (newSize) => {
      pageSize.value = newSize;
      fetchData();
    };
    
    const handleCurrentChange = (newPage) => {
      currentPage.value = newPage;
      fetchData();
    };
    
    // 初始化加载数据
    onMounted(() => {
      getArticlesList();
    });
    </script>
    
  