<template>
    <el-upload
      class="upload-demo"
      drag
      :action="uploadUrl"
      :headers="uploadHeaders"
      :on-success="handleUploadSuccess"
      :before-upload="beforeUpload"
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
  import { ElMessage  } from 'element-plus';

  const uploadUrl = 'http://127.0.0.1:3001/uploadImg';
  const uploadHeaders = {
    //在这里加请求头
    // For example: { Authorization: 'Bearer your_token' }
  };
  
  const handleUploadSuccess = (response, file, fileList) => {
    // Handle upload success, if needed
    // Message(response, file, fileList);
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        ElMessage.error('Only JPG/PNG files are allowed!');
    }
  
    return isJpgOrPng;
  };
  </script>
  