<template>
<div class="verticalline">
<p>
OR
</p>
</div>

</template>

<script>
export default {
  name: "VerticalBar"
};
</script>

<style scoped>
.verticalline{
    border-style: solid;
    width: 3px;

    border-right: 1px solid rgb(255, 255, 255);
    height: 400px;
    position: relative;
 
}
p{
  position: absolute;
  right: 0;
  top: 47%;
  margin-right: -13px;
  color: white;
  background: rgba(0, 0, 0, 0.911);

  }

</style>
