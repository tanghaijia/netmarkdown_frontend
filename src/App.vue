<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BlogHeader from './components/WebHeader.vue'
import HomeView from './views/HomeView.vue';
import BlogView from './views/BlogView.vue'
</script>

<template>
  <BlogHeader/>
  <!-- <HomeView/> -->
  <!-- <BlogView></BlogView> -->
  <RouterView/>
  <div class="tail">
  </div>
</template>

<style>
.tail {
  height: 400px;
  background-color: gray;
}
</style>

