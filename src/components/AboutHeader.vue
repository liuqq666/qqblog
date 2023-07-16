<template>
    <div>
      <img src="../../public/static/img/avtar.jpg" class="avtar">
      <p class="name" title="别问为什么strong不加s">DoubleStrong</p>
      <div class="top"></div>
      <div class="buttom">
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  .top {
      height: 150px;
      background-color:darkgrey;
  }
  .buttom {
      height: 150px;
      background-color: rgb(173, 208, 229);
  }
  .avtar {
      width: 140px;
      height: 140px;
      border: 10px solid rgb(173, 208, 229);
      float: left;
      margin-left: 40px;
      margin-top: 80px;
      border-radius: 10%;
  }
  .name {
      float: left;
      margin-top: 170px;
      margin-left: 50px;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 40px;
      color: black;
  }
  </style>