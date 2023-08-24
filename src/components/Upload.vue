<template>
    <el-upload
      class="upload-demo"
      drag
      :action="uploadUrl"
      :headers="uploadHeaders"
      :before-upload="beforeUpload"
      :on-error = "errorHandle"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          单次上传图片
        </div>
      </template>
    </el-upload>
  </template>
  
  <script setup>
  import { UploadFilled } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus';

  const uploadUrl = 'api/uploadImg';
  const errorHandle = (error, uploadFile, uploadFiles) => {
    ElMessage.error(error.message)
  }
  const token = localStorage.getItem('token');

  const uploadHeaders = {
    Authorization: `Bearer ${token}`
  }
  
  </script>
  