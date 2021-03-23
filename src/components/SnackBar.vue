<template>
  <div v-if="display">
    <div v-if="success" class="success-snackbar">
      thanks for contacting us. our team will reach out shortly
      <span class="close" v-on:click="clicked">{{ " " }}&#10006;</span>
    </div>
    <div v-else class="error-snackbar">
      sorry! an error occured while submitting. try after some time<span
        class="close"
        v-on:click="clicked"
        >{{ " " }}&#10006;</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SnackBar",
  props: {
    display: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    close: {
      type: Function
    }
  },

  methods: {
    clicked() {
      this.close();
    }
  }
};
</script>

<style scoped>
.success-snackbar {
  transition-property: opacity, bottom, left, right, width, margin,
    border-radius;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  font-family: RobotoDraft;
  font-size: 14px;
  min-height: 14px;
  background-color: #1a7c1f;
  position: fixed;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  line-height: 22px;
  padding: 15px 26px;
  opacity: 1;
  bottom: 2%;
  right: 2%;
}
.error-snackbar {
  transition-property: opacity, bottom, left, right, width, margin,
    border-radius;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  font-family: RobotoDraft;
  font-size: 14px;
  min-height: 14px;
  background-color: #ff1f01;
  position: fixed;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  line-height: 22px;
  padding: 15px 26px;
  opacity: 1;
  bottom: 2%;
  right: 2%;
}

.close {
  color: yellow;
  margin-left: 1vw;
}
</style>
