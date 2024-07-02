<template>
  <!-- 主页 -->
  <div class="main-wrapper">
    <!-- 第一部分：关键数据 -->
    <div class="margin-class main-top-wrapper">
      <div class="title padding-left-class">
        <div class="width-trip"></div>
        <div class="title-name">
          关键数据
        </div>
      </div>
      <div class="padding-class main-top-child-wrapper">
        <div class="main-top-child">
          <p>数字</p>
          <p>月剩余金额</p>
        </div>
        <div class="trip"></div>
        <div class="main-top-child">
          <p>数字</p>

          <p>月花费金额</p>
        </div>
        <div class="trip"></div>
        <div class="main-top-child">
          <p>数字</p>
          <p>月储蓄金额</p>
        </div>
      </div>
    </div>
    <!-- 第二部分：常用功能 -->
    <div class="margin-class main-center-wrapper">
      <div class="title padding-left-class">
        <div class="width-trip"></div>
        <div class="title-name">
          常用功能
        </div>
      </div>
      <div class="padding-class">
        功能一
      </div>
      <el-button @click="changePinia">changePinia</el-button>
      <el-button @click="changePinia2">changePinia2</el-button>
      <el-button @click="handleClickMethod
        ">handleClickMethod</el-button>
      <el-button @click="actionChangeState
        ">actionChangeState</el-button>

      helloWorld:
      {{ store.helloWorld }}
      <div>
        count:{{
        store.count
      }}
      </div>
    </div>
    <!-- 第三部分：echarts图表 -->
    <div class="charts-wrapper">
      <div class="charts1">
        1
      </div>
      <div class="charts2">
        2
      </div>
      <div class="charts3">
        3
      </div>
      <div class="charts4">
        4
      </div>
    </div>
  </div>
</template>

<script
  lang="ts"
  setup
>
import { mainStore } from "../store/index";
const store = mainStore();
// let { helloWorld, count: any } = storeToRefs(store)

// 正常修改多条数据
const changePinia = () => {
  store.helloWorld =
    store.helloWorld + "!";
  store.count++;
};
// 使用$patch修改多条数据,经过优化，速度快
const changePinia2 = () => {
  store.$patch({
    count: store.count + 2,
    helloWorld:
      store.helloWorld ===
        "jspang"
        ? "HelloWorld"
        : "jspang",
  });
};
// $patch加函数的形式修改状态数据，适合复杂的数据，比如对象，数组
const handleClickMethod =
  () => {
    store.$patch((state) => {
      state.count++;
      state.helloWorld =
        state.helloWorld ===
          "jspang"
          ? "HelloWorld"
          : "jspang";
    });
  };

const actionChangeState =
  () => {
    store.changeState();
  };
</script>

<style
  lang="less"
  scoped
>
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
    grid-template-columns: repeat(2,
        1fr);
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
