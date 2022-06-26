<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="柴油分析仪器"
      name="first"
    >
      <div class="product-wrapper">
        <div
          class="product-class"
          v-for="item in prodectList"
          :key=item
        >
          <img
            :src="item.path"
            alt=""
            srcset=""
            class="product-img"
          >
        </div>

      </div>
    </el-tab-pane>
    <el-tab-pane
      label="汽油分析仪器"
      name="second"
      lazy
    >汽油分析仪器</el-tab-pane>
    <el-tab-pane
      label="液化气分析仪器"
      name="third"
      lazy
    >液化气分析仪器 </el-tab-pane>
    <el-tab-pane
      label="航煤分析仪器"
      name="fourth"
      lazy
    >航煤分析仪器</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import { ref } from 'vue'

// todo 需要给定类型any
let activeName: any = ref('first')

let prodectList: any = [
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product2.jpg') },
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product1.jpg') },
  { path: require('../assets/product1.jpg') },
]
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // todo 需要tab.props.name  才能拿到name的值

  activeName.value = tab.props.name
}
</script>
<style lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.product-wrapper {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px 50px;
  justify-content: space-between;
  margin: 0 auto;
}
.product-class {
  border: 1px solid #eee;
  height: 150px;
  .product-img {
    width: 100%;
    height: 100%;
  }
}
</style>
