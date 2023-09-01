<script setup>
import BlogCard from './BlogCard.vue'
import { NList, NListItem, NButton, NCard } from 'naive-ui'
</script>

<template>
    <n-list>
        <n-list-item>
            <n-card title="我认为" size="huge" :bordered="false">
                首
            </n-card>
        </n-list-item>
        <n-list-item>
            <BlogCard></BlogCard>
        </n-list-item>
        <n-list-item>
            <BlogCard></BlogCard>
        </n-list-item>
        <n-list-item>
            <BlogCard></BlogCard>
        </n-list-item>
    </n-list>
</template>

<script>
export default {
    name: "BlogCardList"
}
</script>