import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由
import router from "./router/index.js";
// 引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入animate.css
import 'animate.css'
// 导入windicss
import 'virtual:windi.css'

const app = createApp(App)
// 装载路由
app.use(router)
// 装载ElementPlus
app.use(ElementPlus)
app.mount('#app')
