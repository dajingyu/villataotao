<template>

  <el-carousel height="559px">
    <el-carousel-item
      v-for="item in bannerList"
      :key="item"
    >
      <img
        :src="item.path"
        alt=""
        srcset=""
        class="banner-img"
      >
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
let bannerList: any = [
  { path: require('../assets/banner1.jpg') },
  { path: require('../assets/banner2.jpg') },
  { path: require('../assets/banner3.jpg') },
  { path: require('../assets/banner4.jpg') },
]
</script>

<style>
.banner-img {
  width: 100%;
  height: 559px;
}
</style>