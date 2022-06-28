<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backclick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item+index" 
               class="title-item" 
               :class="{active:index === currentindex}"
               @click="btnclick(index)">
               {{item}}
               </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentindex:0
    }
  },
  methods:{
    btnclick(index){
      this.currentindex = index;
      this.$emit('btnclick',index)
    },
    backclick(){
      this.$router.go(-1)
    }
  }
};
</script>

<style>
.title{
  display: flex;
}
.title-item{
  flex: 1;
}
.active{
  color:red ;
}
.back img{
margin-top: 10px;
}
</style>