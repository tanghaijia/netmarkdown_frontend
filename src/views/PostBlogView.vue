<script setup>
import Area from '../components/Area.vue';
</script>

<template>
<div style="display: flex;">
    <div class="blog"><Area/></div>
    <div class="right"><Area/></div>
</div>
</template>

<style scoped>
.blog {
    margin: 16px 8px 16px 16px;
    width: 65%;
    background-color: whitesmoke;
    height: 800px;
}
.right {
    margin: 16px 16px 16px 8px;
    width: 35%;
    background-color: whitesmoke;
    height: 800px;
}
</style>