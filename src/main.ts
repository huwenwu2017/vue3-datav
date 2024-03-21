import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DataVVue3 from '@kjgl77/datav-vue3'
import  "./components/index.css"
import "././mock/index.js"
createApp(App).use(store).use(router).use(DataVVue3).mount('#app')
