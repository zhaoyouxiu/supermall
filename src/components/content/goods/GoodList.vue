<template>
  <div class="goods">
  <good-list-item class="goodlistitem" v-for="(item,index) in goods" :key="index.item" :good-item='item'  />
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
name:'GoodList',
props:{
  goods:{
    type:Array,
    default(){
      return []
    }
  }
},
components:{
   GoodListItem
},
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
};

</style>