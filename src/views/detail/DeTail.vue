<template>
  <div id="detail">
    <detail-navbar class="detail-nav" @btnclick="btnclick" ref="nav"></detail-navbar>
    
    <s-croll class="content" ref="scroll" @scroll="contentScroll"  :probeType="3" >
     
     <h2 v-for="(item,index) in this.$store.state.cartList" :key="item+index">{{item}}</h2>
     
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :paramInfo="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <good-list :goods="recommends" ref="recommend"></good-list>
    </s-croll>
    
    <detail-bottombar  @addCart="addToCart"      ></detail-bottombar>
     <back-top @click.native="backclick"> </back-top>
     <!-- <Toast :message="message" :show="show"></Toast> -->
  </div>
</template>

<script>
import DetailNavbar from "./childComps/DetailNavbar";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import SCroll from "../../components/common/scroll/SCroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodList from "../../components/content/goods/GoodList";
import { itemListenerMixin,backTopMixin } from "../../common/mixin";
import { debounce } from '../../common/utils';
import DetailBottombar from "./childComps/DetailBottombar.vue";
import {mapActions} from 'vuex'
// import Toast from "@/components/content/toast/Toast.vue";

export default {
  name: "DeTail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    SCroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodList,
    DetailBottombar,
    // Toast
},
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      itemimglistener: null,
      themeTopYs: [],
      getThemeToY:null,
      currentIndex:0,
      message:'',
      show:false
    };
  },
  activated() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
    //2.根据iid进行网络请求，不直接在这里请求而应该封装一下
    getDetail(this.iid).then((res) => {
      //1.顶部轮播图的图片轮播数据
      console.log('res',res); //取出数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      //2.获取商品信息的对象
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6.取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //3.请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends =res.data.list;
    });
    this.getThemeToY= debounce(()=>{
        this.themeTopYs = [];
        this.themeTopYs.push(0),
        this.themeTopYs.push(this.$refs.params.$el.offsetTop),
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop),
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
    },100)
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeToY()
    },
    btnclick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    //滑动的时候获取位置的y值
    contentScroll(position){
     const positiony = -position.y;
     //2.positiony和主题中的值比较[0,7938,9120,9452]
     //0-7938之间，index=0;7938-9120,index=1;9120-9452,index=2
    //  for (let i = 0; i < this.themeTopYs.length; i++) {
    //      if(this.currentIndex !== i && ((i < this.themeTopYs.length-1 && positiony >=this.themeTopYs[i] && positiony < this.themeTopYs[i+1]) 
    //      ||(i === this.themeTopYs.length-1 && positiony >= this.themeTopYs[i]))){
    //        this.currentIndex =i
    //        console.log(this.currentIndex);
    //        this.$refs.nav.currentindex =this.currentIndex
    //      }
    //  }
         for (let i = 0; i < this.themeTopYs.length-1; i++) {
         if(this.currentIndex !==i && (positiony >= this.themeTopYs[i] && positiony < this.themeTopYs[i+1])){
            this.currentIndex =i
            this.$refs.nav.currentindex =this.currentIndex
         }
     

    }},
    addToCart(){
      //1.获取购物车需要展示的信息
      const product={}
       product.iid = this.iid
      product.image=this.topImages[0]
      product.title=this. goods.title
      product.desc=this. goods.desc
      product.price=this. goods.oldPrice
     
     //2.将商品添加到购物车里
      // this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res);
      // })

      //3.商品添加成功用上边的2或者下边的引用map直接拿到函数
      this.addCart(product).then(res=>{
      //  this.show=true;
      //  this.message=res;
      //  setTimeout(() => {
      //    this.show=false;
      //    this.message='';
      //  }, 1500);

       this.$toast.show(res,2000)
      })

    }
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemimageload", this.itemimglistene);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: azure;
  height: 100vh;
}
detail-nav {
  position: relative;
  z-index: 9;
  background-color: azure;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>