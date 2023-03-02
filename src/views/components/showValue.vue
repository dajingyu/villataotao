<!--
 * @Description: 
 * @Author: xu tao
 * @Date: 2023-01-31 14:00:15
 * @LastEditors: xutao xutao@infinidata.cc
 * @LastEditTime: 2023-02-02 09:24:01
-->

<template>
    <div class="padding-class main-top-child-wrapper">
        <div class="main-top-child">
            <p>{{ count }}</p>
            <p>月剩余金额</p>
        </div>
        <div class="trip"></div>
        <div class="main-top-child">
            <p>{{ count1 }}</p>
            <p>月花费金额</p>
            <el-button @click="send">子组件向父组件派发事件</el-button>
        </div>
        <div class="trip"></div>
        <div class="main-top-child">
            <p>{{ count2 }}</p>
            <p>月储蓄金额</p>

            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    inject,
    ref
} from "vue";

// 运行时声明
// const props = defineProps({
//   count:Number,
//   count1:Number,
//   count2:Number
// })

// 基于类型的声明
const props = defineProps<{
    count: number;
    count1: number;
    count2: number;
}>();


const emit = defineEmits([
    "fatherHandler",
]);

let flag = ref<boolean>(true);
const send = () => {
    flag.value = !flag.value;
    emit("fatherHandler", flag);
};
const value = inject(
    "isShow"
);
</script>

<style scoped>

</style>
