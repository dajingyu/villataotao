<template>
  <!-- 主页 -->
  <div class="main-wrapper">
    <!-- 第一部分：关键数据 -->
    <div class="margin-class main-top-wrapper">
      <div class="title padding-left-class">
        <div class="width-trip"></div>
        <div class="title-name">关键数据:{{ vals }}</div>
      </div>
      <showValue :count="count" :count1="count1" :count2="count2" @fatherHandler="getData" />
    </div>
    <!-- 第二部分：常用功能 -->
    <div class="margin-class main-center-wrapper">
      <div class="title padding-left-class">
        <div class="width-trip"></div>
        <div class="title-name">常用功能</div>
      </div>
      <div class="padding-class"> 功能一 </div>
    </div>
    <!-- 第三部分：echarts图表 -->
    <div class="charts-wrapper">
      <div class="charts1">1</div>
      <div class="charts2">2</div>
      <div class="charts3">3</div>
      <div class="charts4">4</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import showValue from '@/views/components/showValue.vue';
  import { onMounted, provide, ref } from 'vue';
  console.log('main组件的setUp');
  let vals = ref<boolean>(false);
  console.log(this, 'setup');

  provide('isShow', false);
  onMounted(() => {
    console.log('main 的 onMounted');
    console.log(this, 'onMounted');
  });
  const getData = (vala: any) => {
    console.log(vala.value, 'getData');
    vals.value = vala;
  };
  let count = ref<number>(5555);

  let count1 = ref(22);
  let count2 = ref(111);

  setInterval(() => {
    // count.value += 1
    // count1.value += 1
    count2.value += 1;
  }, 1000);

  // let flag = false;

  // flag = false;

  // // 定义数组1
  // let arr: boolean[] = [false, false];
  // // 定义数组2,泛型写法
  // let arr2: Array<boolean> = [false, false];

  // // 每个元素类型不一样得数组怎么办：元组
  // let arr3: [boolean, string] = [false, '222'];
</script>

<style lang="less" scoped>
  .main-wrapper {
    display: flex;
    flex-direction: column;
    margin: 20px;

    .main-top-wrapper {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 0 1px 1px 0 rgb(60 75 100 / 14%);
      border-radius: 10px;
    }

    .main-top-child-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }

    .main-center-wrapper {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 0 1px 1px 0 rgb(60 75 100 / 14%);
      border-radius: 10px;
    }

    // charts
    .charts-wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px 20px;

      .charts1 {
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgb(60 75 100 / 14%);
        border-radius: 10px;
        min-height: 360px;
      }

      .charts2 {
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgb(60 75 100 / 14%);
        border-radius: 10px;
        min-height: 360px;
      }

      .charts3 {
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgb(60 75 100 / 14%);
        border-radius: 10px;
        min-height: 360px;
      }

      .charts4 {
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgb(60 75 100 / 14%);
        border-radius: 10px;
        min-height: 360px;
      }
    }
  }
</style>
