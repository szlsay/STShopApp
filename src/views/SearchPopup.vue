<template>
  <div class="popup">
    <van-search
      v-model="searchVal"
      show-action
      :placeholder="placeholderVal"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: '',
      placeholderVal: ''
    }
  },
  methods: {
    onSearch(val) {
      console.log('按了回车')
    },
    onCancel() {
      // 点击了取消
      this.$router.go(-1)
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
