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
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </template>
  
  <script setup>
  import { UploadFilled } from '@element-plus/icons-vue'
  import { ElMessage  } from 'element-plus';

  const uploadUrl = 'http://127.0.0.1:3001/login';
  const uploadHeaders = {
    // Add any headers required for authentication or other purposes
    // For example: { Authorization: 'Bearer your_token' }
  };
  
  const handleUploadSuccess = (response, file, fileList) => {
    // Handle upload success, if needed
    Message(response, file, fileList);
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt500K = file.size / 1024 < 500;
  
    if (!isJpgOrPng) {
        ElMessage.error('Only JPG/PNG files are allowed!');
    }
  
    if (!isLt500K) {
        ElMessage.error('Image must be smaller than 500KB!');
    }
  
    return isJpgOrPng && isLt500K;
  };
  </script>
  