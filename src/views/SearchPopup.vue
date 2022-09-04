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
    <SearchProducts
      v-else
      :goodsList="goodsList"
      :filterCategory="filterCategory"
    />
  </div>
</template>

<script>
import HistoryHot from '@/components/HistoryHot'
import SearchTipsList from '@/components/SearchTipsList'
import SearchProducts from '@/components/SearchProducts'
import {
  GetPopupData,
  GetSearchTipsListData,
  GetSearchData
} from '@/request/api'
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
      blockShow: 1,
      searchTipsArr: [1, 2, 3, 4, 5], // 请求数组从父组件传到子组件,
      goodsList: [],
      filterCategory: []
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
      GetSearchData()
        .then((res) => {
          if (res.errno === 0) {
            this.blockShow = 3
            this.goodsList = res.data.goodsList
            this.filterCategory = res.data.filterCategory
          }
        })
        .catch((err) => {
          console.log(err)
        })
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
