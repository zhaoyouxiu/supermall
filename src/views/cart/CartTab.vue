<template >
  <div class="cart">
    <!-- 导航 -->
  <nav-bar class="nav-bar">
  <div slot="center" @click="showCart">购物车({{cartlength}})</div>
  </nav-bar>
  <!-- 商品的列表 -->
  <cart-list></cart-list>
  <!-- 底部汇总 -->
  <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import {mapGetters} from 'vuex'
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";
export default {
  name: "CartTab",
  components: {
    NavBar,
    CartList,
    CartBottomBar
},
  methods: {
    showCart() {
      console.log('cartList', this.$store.state.cartList)
    }
  },
  computed:{
    ...mapGetters(['cartlength'])
},
}
</script>

<style scoped>

.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: azure;
  font-weight: 700;
}
</style>