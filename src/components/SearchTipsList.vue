<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
      <van-cell v-for="item in searchTipsArr" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      finished: true
    }
  },
  props: ['searchTipsArr']
}
</script>
