<script setup>
import Blog from '../components/BlogView/Blog.vue';
import Recommend from '../components/BlogView/Recommend.vue';
</script>

<template>
    <div style="display: flex; background-color: white;">
        <div id="left"></div>
        <div id="med"><Blog/></div>
        <div id="right">
            <Recommend/>
        </div>
    </div>
</template>

<style scoped>
#left {
    background-color: whitesmoke;
    height: 1000px;
    width: 6%;
    margin: 16px 8px 16px 8px;
}
#med {
    /* background-color: whitesmoke; */
    width: 65%;
    margin: 16px 8px 16px 8px;
}
#right {
    /* background-color: whitesmoke; */
    width: 29%;
    margin: 16px 8px 16px 8px;
}
</style>