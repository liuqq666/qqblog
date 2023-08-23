<template>
    <page-all>
    <template #main>
      <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              label-width="120px"
              class="demo-ruleForm"
              :size="formSize"
              status-icon
      >
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="编辑时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                v-model="ruleForm.date"
                type="date"
                label="Pick a date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="标签" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="react" name="type" />
            <el-checkbox label="前端" name="type" />
            <el-checkbox label="vue" name="type" />
            <el-checkbox label="计算机网络" name="type" />
            <el-checkbox label="c" name="type" />
            <el-checkbox label="js" name="type" />
            <el-checkbox label="其他" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="上传Markdown">
          <el-upload
            class="upload-demo"
            :auto-upload="false"
            :on-change="handleChange"
          >
            <el-button size="small" type="primary">点击上传markdown</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            上传
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
    </page-all>
  </template>
  
<script setup>
import request from '@/api/request';
import PageAll from '@/pages/PageAll.vue';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue'

const formSize = ref('default')
const ruleFormRef = ref({})
const ruleForm = reactive({
  name: '',
  date: '',
  type: [],
  markdown: '',
  uid: ''
})


const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
  try{
      await request.uploadArticle(ruleForm);
      ElMessage.success('上传成功');
  }catch(e){
    ElMessage.error("未登录，无权限");
  }
}

const handleChange = (file, fileList) => {
  if(fileList.length > 0){
    const reader = new FileReader();
    reader.onload = (event) => {
      ruleForm.markdown = event.target.result; // 存储文件内容
    };
    reader.readAsText(file.raw)
    ruleForm.uid = file.uid;
  }
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

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
  