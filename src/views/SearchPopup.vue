<template>
  <div class="popup">
    <van-search
      v-model="searchVal"
      show-action
      :placeholder="placeholderVal"
      @search="onSearch"
      @cancel="onCancel"
      @input="onInput"
    />
    <HistoryHot
      v-if="blockShow == 1"
      :searchHistoryData="searchHistoryData"
      :searchHotData="searchHotData"
    />
    <SearchTipsList v-else-if="blockShow == 2" :searchTipsArr="searchTipsArr" />
    <SearchProducts v-else />
  </div>
</template>

<script>
import HistoryHot from '@/components/HistoryHot'
import SearchTipsList from '@/components/SearchTipsList'
import SearchProducts from '@/components/SearchProducts'
import { GetPopupData, GetSearchTipsListData } from '@/request/api'
export default {
  components: {
    HistoryHot,
    SearchTipsList,
    SearchProducts
  },
  data() {
    return {
      searchVal: '',
      placeholderVal: '',
      searchHistoryData: '',
      searchHotData: '',
      blockShow: 3,
      searchTipsArr: [1, 2, 3, 4, 5] // 请求数组从父组件传到子组件
    }
  },
  created() {
    GetPopupData().then((res) => {
      this.placeholderVal = res.data.defaultKeyword.keyword
      this.searchHistoryData = res.data.historyKeywordList
      this.searchHotData = res.data.hotKeywordList
    })
  },
  methods: {
    onSearch(val) {
      console.log('按了回车')
    },
    onCancel() {
      // 点击了取消
      this.$router.go(-1)
    },
    onInput(val) {
      this.blockShow = 2
      // 这个val就是用户输入的文字
      GetSearchTipsListData({ keyword: val }).then((res) => {
        console.log(res.data)
        this.searchTipsArr = res.data
      })
    }
  }
}
</script>
<style lang="less" scoped>
.popup {
  width: 100%;
  height: 100%;
  position: absolute;
  // right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
