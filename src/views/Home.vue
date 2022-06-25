<template>
  <el-container>
    <el-header>
      <div>致力于打造国产微量快速油品检测品牌</div>
      <!-- 多语言 主题定制等功能 -->
      <div>多语言 主题定制</div>

    </el-header>
    <el-main>
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
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let activeIndex = ref('main')
const handleSelect = (key: string, keyPath: string[]) => {
  activeIndex.value = key
}
</script>
