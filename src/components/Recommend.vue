<script setup>
  import { NButton, NSpace, NDivider, NInput, NAffix, 
    NList, NListItem,
    NCard, } from 'naive-ui'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="recommend">
        <div style="font-size: 18px; font-weight: 600 ;padding: 15px;">
            FM推荐
        </div>
        <hr/>
        <n-list>
            <n-list-item v-for="n in 6"><n-card>推荐{{n}}</n-card></n-list-item>
        </n-list>
    </div>
</template>

<style scoped>
.recommend {
    /* padding: 30px; */
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    word-wrap: break-word;
    background-color: white;
    border: 2px solid rgb(232, 234, 237);
    border-radius: 15px;
    min-height: 400px
}
</style>