<template>
  <div class="home">
    <van-search
      v-model="searchVal"
      shape="round"
      placeholder="请输入搜索关键词"
      disabled
      @click="$router.push('/home/searchPopup')"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" alt="" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { GetHomeLists } from '@/request/api'
export default {
  name: 'HomeView',
  data() {
    return {
      searchVal: '',
      banner: []
    }
  },
  created() {
    GetHomeLists()
      .then((res) => {
        const { banner } = res.data
        this.banner = banner
      })
      .catch((err) => {
        console.log('Error')
        console.log(err)
      })
  }
}
</script>
<style lang="less">
// .slide-enter-from {
//   /*进场初始效果*/
//   right: -100%;
// }
// .slide-enter-active {
//   transition: all 3s;
// }
// .slide-enter-to {
//   /*进场最终效果*/
//   right: 0;
// }
// .slide-enter-from,
// .slide-leave-to {
//   right: -100%;
// }
// .slide-enter-active,
// .slide-leave-active {
//   transition:right 3s;
// }
// .slide-enter-to,
// .slide-leave-from {
//   right: 0;
// }
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 3s ease;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }
</style>
