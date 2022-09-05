<template>
  <div>
    <div class="his-hot" v-show="isShowHistory">
      <div class="hd">
        <h4>历史记录</h4>
        <van-icon name="delete" @click="clearHistory" />
      </div>
      <div class="bd">
        <van-tag
          @click="tagClick(item)"
          v-for="(item, index) in historyListData"
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
          @click="tagClick(item.keyword)"
          v-for="(item, index) in hotKeywordListData"
          :key="index"
          plain
          type="default"
          :class="item.is_hot ? 'red' : ''"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ClearHistory } from '@/request/api'
export default {
  data() {
    return {
      isShowHistory: true
    }
  },
  props: ['historyListData', 'hotKeywordListData'],
  methods: {
    tagClick(val) {
      // console.log(val);
      this.$emit('tagClick', val)
    },
    clearHistory() {
      ClearHistory().then((res) => {
        if (res.errno === 0) {
          // console.log(res);
          // 提示语
          this.$toast.success('删除成功')
          setTimeout(() => {
            // 隐藏历史记录的这个盒子
            this.isShowHistory = false
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.his-hot {
  background-color: #ffffff;
  padding: 0.1rem;
  margin-bottom: 0.2rem;
  .hd {
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    margin-bottom: 0.08rem;
    h4 {
      font-size: 0.2rem;
    }
  }

  .van-tag {
    margin-right: 0.05rem;
    padding: 0.03rem;
  }
  .red {
    color: darkred;
  }
}
</style>
