<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-button" :ischecked="isSelectAll" @click.native="checkclick"></CheckButton>
      <span>全选</span>
    </div>
    <div class="price">合计{{ totalprice }}</div>
    <div class="calculate" @click="calcclick">去结算:{{ checklength }}</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkbutton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    ...mapGetters(["carlist"]),
    totalprice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          let price = item.price.slice(1).trim();
          let priceNum = Number.parseFloat(price);
          return preValue + priceNum * item.count;
        }, 0)
        .toFixed(2);
    },
    checklength() {
      return this.carlist.filter((item) => item.checked).length;
    },
    isSelectAll() {
      //1.使用过滤器
      if (this.carlist.length === 0) return false;
      // return !this.carlist.filter((item) => !item.checked).length;

      //2.使用find函数
      // if(this.carlist.length===0) return false
      // return ! this.carlist.find(item=> !item.checked)

      //3.普通的遍历
      for (let item of this.carlist) {
        if (!item.checked){
          return false
        }
      }
      return true
    },
  },
  methods:{
    checkclick(){
      if(this.isSelectAll){
        this.carlist.forEach(item => {
          item.checked=false
        })
      }else{
        this.carlist.forEach(item=>item.checked=true)
      }
    },
    calcclick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  position: relative;
  line-height: 40px;
  display: flex;
  font-size: 14px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.price {
  flex: 1;
  margin-left: 20px;
}

.calculate {
  width: 90px;
  color: #fff;
  background-color: red;
  text-align: center;
}
</style>