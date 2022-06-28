<template>
  <div class="toast" v-show="isshow">
<div >{{message}}</div>
  </div>
</template>

<script>
export default {
// eslint-disable-next-line vue/multi-word-component-names
name:'Toast',
props:{
  // message:{
  //   type:String,
  //   default:''
  // },
  // show:{
  //   type:Boolean,
  //   default:false
  // }
},
data() {
  return {
    message:'',
    isshow:false
  }
},
methods: {
  // eslint-disable-next-line vue/no-dupe-keys
  show(message,duration){
    this.isshow=true;
    this.message=message

    setTimeout(() => {
      this.isshow=false;
      this.message=''
    }, duration);
  }
},
}
</script>

<style>
.toast{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color:rgba(0,0,0,.75);
  z-index: 999;
}
</style>