<template>
  <div class="home">
    <span>Welcome to Your Vue.js App</span>
    <p>Home组件测试vant组件</p>
    <van-button type="primary">主要按钮</van-button>
    <van-search v-model="searchVal" disable placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
import { GetHomeLists } from '@/request/api'
export default {
  name: 'HomeView',
  data() {
    return {
      searchVal: ''
    }
  },
  created() {
    GetHomeLists().then((res) => {
      if (res.status === 200) {
        console.log(res.data) // 成功拿到所有首页数据
      }
    })
  }
}
</script>
