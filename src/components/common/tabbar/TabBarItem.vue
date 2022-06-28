<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 所有的item都展示同一个图片同一个文字，做两个卡槽分别放置 -->
    <!-- 因为活跃时和不活跃时不一样所以还要加一个活跃的卡槽显示 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>

    <!-- <slot class="{active:isActive}"   name='item-text'></slot> -->
    <!-- 我们发现上边这个字体根本不生效，因为卡槽会被前边div内容代替，class就不见了，所以再加个div动态绑定一下-->
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
      path: String,
      activeColor: {
        typeof: String,
        default: 'red'
      }
    },
  data() {
    return {
      // isActive: true,  不能写死不然永远处于活跃状态，所以搞个计算属性动态决定
    };
  },
  computed: {
    isActive() {
      // 现在就是找一个判断条件可以出现true或者false，就能动态决定了
      // 中心思想：我点击你时也就是活跃时候的路径和你本身路径相同就是true（试着看看真的红的时候状态）
      return this.$route.path.indexOf(this.path) !== -1;
      // =-1说明没找到，！=-1说明找到了，找到了就是true
    },
    activestyle() {
      return this.isActive ? { color: this.activeColor } : {}
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      console.log(this.activeColor);
    },
  },
};
</script>

<style>
.tab-bar-item {
  /* 先让每一个平均分配，再让文字水平居中 */
  flex: 1;
  text-align: center;
  /* 基本上高度都是49px */
  height: 49px;
  font-size: 14px;
}
</style>