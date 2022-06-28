<template>
  <div>
    <div class="icon-selector" :class="{ check: ischecked }">
      <img src="../../../assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    ischecked: {
      type: Boolean,
      default: false,
    },}}
</script>

<style scoped>
.icon-selector {
  border-radius: 50%;
  border: 2px solid #ccc;
}

.check {
  background-color: red;
  border-color:red;
}
</style>