<script setup>
  import { NButton, NSpace, NDivider, NInput, NAffix } from 'naive-ui'
  import { RouterLink, RouterView } from 'vue-router'
  import 'vfonts/FiraCode.css'
</script>

<template>
  <div id="header">
    <n-space>
      <router-link to="/" tag="button">
        <n-button quaternary><span class="headerIndex">Home</span></n-button>
      </router-link>
      <n-divider vertical />
      <router-link to="/blog" tag="button">
        <n-button quaternary round><span class="headerIndex">Blog</span></n-button>
      </router-link>
      <n-button quaternary round><span class="headerIndex">bbbb</span></n-button>
      <n-button quaternary round><span class="headerIndex">ccc</span></n-button>
      <n-button quaternary round><span class="headerIndex">dddd</span></n-button>
      <n-button quaternary round><span class="headerIndex">eeeeeeee</span></n-button>
      <n-divider vertical />
      <n-input autosize placeholder="自动调整尺寸"></n-input>
      <router-link to="/postblog" tag="button">
        <n-button quaternary round><span style="font-weight: 600;">发表</span></n-button>
      </router-link>
    </n-space>
  </div>
  <hr/>
</template>
<style scoped>
#header {
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.headerIndex {
  font-family: v-mono, other-fallbacks;
  font-weight: bolder;
}
</style>

<script>
export default {
    name: 'BlogHeader'
}
</script>