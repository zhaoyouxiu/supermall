<template>
  <div class="cart-list">
    <s-croll class="content" :probeType="3" ref="scroll">
    <cart-list-item v-for="(item,index) in carlist"  :key="index" :product="item" />
    </s-croll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SCroll from "../../../components/common/scroll/SCroll.vue";
import CartListItem from './CartListItem'

export default {
  components: { 
    SCroll,
  CartListItem },
  name: "CartList",
  computed: {
    ...mapGetters(["carlist"]),
  },
  activated() {
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.content {
  height: 100%;
}
</style>