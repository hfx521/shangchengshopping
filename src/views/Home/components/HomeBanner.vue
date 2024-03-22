<script setup>
import { getBannerAPI } from '@/apis/home'
//封装好的接口数据 在api目录之下
import { onMounted, ref } from 'vue'

const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI()
  console.log(res)
  bannerList.value = res.result
}
// 进行异步操作

onMounted(() => getBanner())

</script>


<!-- 轮播图效果 -->
<!-- elementplus组件进行渲染 -->
<template>
  <div class="home-banner">
    <!-- 外层进行简单的样式处理 -->
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <!-- 轮播图进行显示 -->

      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>