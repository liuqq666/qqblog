import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//elementplus
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//vmd
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
import './assets/reset.css';

//注册markdown预览器
VMdPreview.use(githubTheme, {
  Hljs: hljs
})


const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VMdPreview)

//获取vuex  
export const { state, commit } = store;
//全局注册element按钮
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')

export default app