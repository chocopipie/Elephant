<template>
  <div id="container">
    <strong>{{ name }}</strong>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
#container {
  text-align: left;
  left: 0;
  right: 0;
  top: 10%;
  transform: translateY(-50%);
  transform: translateX(10%);
  padding-top: 20px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
