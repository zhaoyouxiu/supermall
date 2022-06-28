<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <!-- 我们监听不要直接在这里，因为一下会改变四个所以要在各自里边监听 -->
      <i
        slot="item-icon"
        style="color: #65dc78; font-size: 25px"
        class="iconfont icon-shouye"
      ></i>
      <i
        slot="item-active"
        style="color: red; font-size: 25px"
        class="iconfont icon-shouyetianchong"
      ></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="blue">
      <i
        slot="item-icon"
        style="color: #65dc78; font-size: 25px"
        class="iconfont icon-fenlei"
      ></i>
      <i
        slot="item-active"
        style="color: red; font-size: 25px"
        class="iconfont icon-fenlei"
      ></i>
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/cart" activeColor="blue"
      ><i
        slot="item-icon"
        style="color: #65dc78; font-size: 25px"
        class="iconfont icon-gouwuche"
      ></i>
      <i
        slot="item-active"
        style="color: red; font-size: 25px"
        class="iconfont icon-gouwuche"
      ></i>
      <div slot="item-text">购物车</div></tab-bar-item
    >
    <tab-bar-item path="/profile">
      activeColor="blue"
      <i
        slot="item-icon"
        style="color: #65dc78; font-size: 25px"
        class="iconfont icon-wode5"
      ></i>
      <i
        slot="item-active"
        style="color: red; font-size: 25px"
        class="iconfont icon-wode5"
      ></i>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 引入tabbar.vue这个组件然后再在下边注册
import TabBar from "../../common/tabbar/TabBar";
//引入TabBarItem组件然后再注册
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>