<template>
  <div class="history-hot">
    <div class="his-hot">
      <div class="hd">
        <h4>历史记录</h4>
        <van-icon name="delete" />
      </div>
      <div class="bd">
        <van-tag
          v-for="(item, index) in searchHistoryData"
          :key="index"
          plain
          type="default"
          >{{ item }}</van-tag
        >
      </div>
    </div>

    <div class="his-hot">
      <div class="hd">
        <h4>热门搜索</h4>
      </div>
      <div class="bd">
        <van-tag
          v-for="(item, index) in searchHotData"
          :key="index"
          plain
          :type="item.is_hot ? 'danger' : 'default'"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['searchHistoryData', 'searchHotData']
}
</script>

<style lang="less" scoped>
.his-hot {
  margin-bottom: 0.2rem;
  background-color: #fff;
  padding: 2%;
  .hd {
    padding-top: 2%;
    display: flex;
    justify-content: space-between;
    font-size: 0.22rem;
    margin-bottom: 0.1rem;
    h4 {
      font-size: 0.2rem;
    }
  }
  .van-tag {
    padding: 0.04rem;
    margin-right: 0.1rem;
    margin-bottom: 0.05rem;
  }
}
</style>
