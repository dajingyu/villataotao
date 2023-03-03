<!--
 * @Description: 
 * @Author: xu tao
 * @Date: 2022-08-09 14:34:42
 * @LastEditors: xutao xutao@infinidata.cc
 * @LastEditTime: 2023-03-03 10:20:48
-->
<template>
  <el-container class="wrapper">
    <el-header class="header">
      <div class="nav-left-wrapper">
        <el-icon :size="20">
          <Coin />
        </el-icon>
        <div class="nav-left-text">家庭财务系统</div>

      </div>
      <!-- 多语言 主题定制等功能 -->
      <!-- <div>多语言 主题定制2</div> -->

    </el-header>
    <el-container class="container">
      <el-aside class="aside-wrapper">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          router
        >
          <el-menu-item index="main">首页</el-menu-item>

          <el-menu-item index="money">花销管理</el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 主体内容显示区域 -->
      <el-main class="main-container">
        <router-view />
      </el-main>
    </el-container>
    <el-footer class="footer flex-center">版本1.0.0 </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, reactive, ref } from 'vue';

// console.log(this)

let obj = {bb:2}
let obj2 = reactive(obj)
onMounted(() => {
})
onUpdated
// 该函数接收一个普通数字，并且
// 将无法跟踪 state.count 的变化
// callSomeFunction(state.count)

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
    height: 60px;
    background-color: rgba(1, 56, 112, 1);
    color: white;
    text-align: left;
    line-height: 60px;
    position: fixed;
    width: 100%;
    z-index: 99;
    .nav-left-wrapper {
      display: flex;
      align-items: center;
      .nav-left-text {
        margin-left: 20px;
      }
    }
  }
  .footer {
    height: 150px;
    background: rgba(51, 51, 51, 1);
    color: white;
    font-weight: bold;
  }
  .container {
    flex: 1;

    .main-container {
      position: absolute;
      top: 60px;
      left: 200px;
      flex: 1;
      min-width: calc(100% - 200px);
      padding: 0;
      overflow: scroll;
      background-color: #f0f2f5;
      min-height: calc(100% - 60px);
    }
    .aside-wrapper {
      min-height: 100%;
      width: 200px;
      background-color: #fff;
      top: 60px;
      bottom: 0;
      position: fixed;
    }
  }
}
</style>
