<template>
  <div ref="wrapper">
 <div class="content">
   <slot></slot>
 </div>
  </div>
</template>

<script>
import BCsroll from 'better-scroll'

export default {
name:"SCroll",
props:{
  probeType:{
    type:Number,
    default(){
      return 0
    }
  },
  pullUpLoad:{
    type:Boolean,
    default(){
      return false
    }
  }
},
data(){
  return{
    scroll:null
  }
},
updated() {
  // 1.创建Bscroll对象
  this.scroll = new BCsroll(this.$refs.wrapper,{
    probeType:this.probeType,
    click:true,
    pullUpLoad:this.pullUpLoad
},)
// 2.监听滚动的位置
if (this.probeType ===2 || this.probeType ===3 ){
this.scroll.on('scroll',position=>{
  this.$emit('scroll',position)
})}
// 3.监听上拉事件
this.scroll.on('pullingUp',()=>{
  // console.log('上拉加载更多');
  this.$emit('pullingUp')
})

},
methods:{
  scrollTo(x,y,time){
    this.scroll && this.scroll.scrollTo(x,y,time)
  },
  finishPullUp(){
    this.scroll && this.scroll.finishPullUp()
  },
  refresh(){
   this.scroll &&  this.scroll.refresh()
  },
  getScrollY(){
    return this.scroll? this.scroll.y:0
  }
}
}
</script>

<style>

</style>