import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vfonts/Lato.css'
import { VueShowdownPlugin } from 'vue-showdown';

const app = createApp(App)

app.use(router)
app.use(VueShowdownPlugin, {
    // 设置 showdown 默认 flavor
    flavor: 'github',
    // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
    options: {
      emoji: true,
    },
});

app.mount('#app')
