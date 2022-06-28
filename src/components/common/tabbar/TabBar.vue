<template>
  <div id="tab-bar">
    <!-- 在这个容器里有四个组件所以放置四个卡槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
/* flex布局是的水平排列 */
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /* 相对于屏幕定位，距离底端0px */
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  /* 使用一下阴影，过渡更好看用box-shadow,x方向不需要偏离，y向上偏离 */
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
  z-index: 7;
}
</style>