import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './style.css'
import App from './App.vue'
import router from './routes/router.js'

createApp(App).use(router).mount('#app')
