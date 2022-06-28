<template>
  <div>
     <swiper>
      <swiper-item v-for="(item,index) in banner"  :key='item+index'>
       <a :href="item.link">
         <img :src="item.image" alt="" @load="imageload">
       </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem} from "../../../components/common/swiper";
export default {
name:'HomeSwiper',
props:{
  banner:{
    type:Array,
    default(){
      return []
    }
  }
},
components:{
  Swiper,
  SwiperItem
},
data(){
  return{
  isload:false
  }
},
methods:{
  imageload(){
    if(!this.isload){
     this.$emit('swiperimageload')
     this.isload=true
    }
  }
}
}
</script>

<style>

</style>