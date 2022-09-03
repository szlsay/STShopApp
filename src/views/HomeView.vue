<template>
  <div class="home">
    <van-search v-model="searchVal" disable placeholder="请输入搜索关键词" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="item in banner" :key="item.id">
           <img :src="item.image_url" alt="" width="100%">
        </van-swipe-item>
    </van-swipe>
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
    GetHomeLists().then((res) => {
      const { banner } = res.data
      this.banner = banner
      console.log(this.banner)
    }).catch(err => {
      console.log('Error')
      console.log(err)
    })
  }
}
</script>
