<template>
<div class="wrapper">
  <ul class="content">
  <button @click="btnclick">按钮</button>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  <li>分类列表</li>
  </ul>
</div>
  
</template>

<script>
import BScroll from 'better-scroll'

export default {
name:'CategoryTab',
data(){
 return{
   scroll:null
 }
},
mounted() {
  this.scroll=new BScroll(document.querySelector('.wrapper'),{probeType:3,pullUpLoad:true})
  // this.scroll.on('scroll',(position)=>{console.log(position);})
  this.scroll.on('pullingUp',()=>{console.log('上拉加载更多');})
},
methods: {
  btnclick(){
    console.log('你');
  }
},




}

</script>

<style>
.wrapper{
  height: 150px;
  background-color:red;
  /* overflow-y: scroll; */
  overflow: hidden;
}
</style>