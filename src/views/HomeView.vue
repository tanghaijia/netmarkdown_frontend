<script setup>
import BlogCardList from '../components/HomeView/BlogCardList.vue'
</script>

<template>
  <div class="viewpage">
    <div class="left">
    </div>
    <div class="right">
      <BlogCardList></BlogCardList>
    </div>
  </div>
</template>

<style scoped>
.viewpage {
  margin: 5px;
  display: flex;
  height: 100%;
  .left {
    width: 400px;
    height: 1000px;
    margin: 5px;
    background-color: whitesmoke;
  }
  .right {
    height: 1800px;
    width: 100%;
    margin: 5px;
    background-color: whitesmoke;
  }
}
</style>
