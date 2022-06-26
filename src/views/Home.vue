<template>
  <el-container class="wrapper">
    <el-header class="header">
      <div>致力于打造国产微量快速油品检测品牌</div>
      <!-- 多语言 主题定制等功能 -->
      <!-- <div>多语言 主题定制2</div> -->

    </el-header>
    <el-main class="container">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="main">首页</el-menu-item>

        <el-menu-item index="productList">产品介绍</el-menu-item>
      </el-menu>

      <router-view />
    </el-main>
    <el-footer class="footer flex-center">Copyright©2022大连分析仪器有限公司 版权所有 </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let activeIndex = ref('main')
const handleSelect = (key: string, keyPath: string[]) => {
  activeIndex.value = key
}
</script>

<style scoped lang="less">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  .header {
    height: 40px;
    background-color: rgba(1, 56, 112, 1);
    color: white;
    text-align: left;
    line-height: 40px;
  }
  .footer {
    height: 150px;
    background: rgba(51, 51, 51, 1);
    color: white;
    font-weight: bold;
  }
  .container {
    flex: 1;
  }
}
</style>
