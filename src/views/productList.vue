<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="User"
      name="first"
    >User</el-tab-pane>
    <el-tab-pane
      label="Config"
      name="second"
      lazy
    >Config</el-tab-pane>
    <el-tab-pane
      label="Role"
      name="third"
      lazy
    >Role</el-tab-pane>
    <el-tab-pane
      label="Task"
      name="fourth"
      lazy
    >Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import { ref } from 'vue'

// todo 需要给定类型any
let activeName: any = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // todo 需要tab.props.name  才能拿到name的值

  activeName.value = tab.props.name
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
