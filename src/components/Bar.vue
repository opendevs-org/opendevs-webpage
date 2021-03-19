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
@media only screen and (min-width: 1200px) {

.verticalline{
    border-style: solid;
    width: 1px;
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
}

@media only screen and (max-width: 1200px) {
  .verticalline{
    border-style: solid;
    min-width: 400px;
    border-bottom: 1px solid rgb(255, 255, 255);
    height: 3px;
    position: relative;
 
}
p{
  position: absolute;
  left: 47%;
  margin-top: -13px;
  color: white;
  background: rgba(0, 0, 0, 0.911);

  }

}

</style>
