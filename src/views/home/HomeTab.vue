<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- <tab-control
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabcontrol1"
      class="tab-control"
      v-show="istabfixed"/> -->
    <s-croll
      class="content"
      :probeType="3"
      @scroll="contentscroll"
      ref="scroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperimageload="swiperimageload" />
      <recommend-view :recommend="recommend" />
      <feature-view> </feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol2"
      />
      <good-list :goods="showGoods" />
    </s-croll>

    <back-top @click.native="backclick"> </back-top>
  </div>
</template>

<script>
// 导入的大组件里的小组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
// 导入的home组建的大组件
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodList from "@/components/content/goods/GoodList.vue";
import SCroll from "@/components/common/scroll/SCroll";
import BackTop from "../../components/content/backTop/BackTop.vue";
//导入的网络请求函数 方法
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import { debounce } from "../../common/utils";

export default {
  name: "HomeTab",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    SCroll,
    BackTop,
  },
  data() {
    return {
      result: null,
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentype: "pop",
      isActive: false,
      tabOffsetTop: 0,
      // istabfixed: false,
      saveY: 0,
      itemimglistener:null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentype].list;
    },
  },
  activated() {
     this.$refs.scroll.scrollTo(0,this.saveY,0)
     this.$refs.scroll.refresh()
  },
  deactivated() {
    //1.保存y值
    this.saveY = this.$refs.scroll.getScrollY();
    //2.取消全局事件的监听
    this.$bus.$off('itemimageload',this.itemimglistener)
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata(),
      //2.请求商品数据
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  mounted() {
    //3.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    //对监听的事件进行保存
    this.itemimglistener=() => {refresh();}
    this.$bus.$on("itemimageload", this.itemimglistener);
  },
  methods: {
    // 事件监听方法
    tabclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentype = "pop";
          break;
        case 1:
          this.currentype = "new";
          break;
        case 2:
          this.currentype = "sell";
          break;
      }
    },
    backclick() {
      this.$refs.scroll.scrollTo(0, 0,300);
    },
    contentscroll(position) {
      // 1.判断backtop是否显示
      this.isActive = -position.y > 1000;
      // 2.决定tabControl是否吸顶(position: fixed)
      // this.istabfixed =(-position.y)  > this.tabOffsetTop;
    },
    loadMore() {
      //调用函数，当前是哪个页面会刷新，监听图片什么时候加载完
      this.getHomeGoods(this.currentype);
    },
    swiperimageload() {
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: azure;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.tab-control {
    position: relative;
    z-index: 9;
  }

#home {
  height: 100vh;
  position: relative;
}
</style>