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
        <el-form-item label="语雀namespace" prop="namespace">
          <el-input v-model="ruleForm.namespace" type="textarea" />
        </el-form-item>
        <el-form-item label="语雀slug" prop="slug">
          <el-input v-model="ruleForm.slug" type="textarea" />
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
  // @ is an alias to /src
  import PageAll from '@/pages/PageAll.vue';
  import { reactive, ref } from 'vue'

const formSize = ref('default')
const ruleFormRef = ref({})
const ruleForm = reactive({
  name: 'Hello',
  date: '',
  delivery: false,
  type: [],
  namespace: '',
  slug: '',
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
  