<template>
  <div class="tab-control">
  <div v-for="(item,index) in titles" :key="item"  class='tab-control-item' :class="{active: index ===currentIndex}" @click="btnclick(index)">
    <span>{{item}}</span>
  </div>
  </div>
</template>

<script>
export default {
name:'TabControl',
props:{
  titles:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return{
    currentIndex:0
  }
},
methods: {
  btnclick(index){
    this.currentIndex = index;
    this.$emit('tabclick',index)
  }
},
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  font-size: 15px;
  padding-top: 10px;
}

.tab-control-item{
  flex: 1;
}

.active{
  color:var(--color-high-text);
}

.active span{
     border-bottom: 3px solid var(--color-tint);
  }
</style>