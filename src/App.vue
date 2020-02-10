<template>
 <div id="app">
    <h2>App根组件</h2>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="head"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.head{
  height: 100px;
  width: 375px;
  background-color: #ff3040;
}
</style>
