<template>
  <div class="home">
    <span>Welcome to Your Vue.js App</span>
    <p>Home组件测试vant组件</p>
    <van-button type="primary">主要按钮</van-button>
    <van-search v-model="searchVal" disable placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      searchVal: ''
    }
  }
}
</script>
