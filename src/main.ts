import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import './style.css'
// 引用颜色
import "./color.css"
import App from './App.vue'
// import Home from "./pages/home/Home.vue"
import HelloWorld from '@/components/HelloWorld.vue'
import Home from "@home/Home.vue"
import Article from './components/pages/article/Article.vue'
import hljs from 'highlight.js/lib/core';



import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";



// link.rel = 'stylesheet'
// import "highlight.js/styles/stackoverflow-dark.css";

// import "highlight.js/styles/stackoverflow-dark.css";

import "highlight.js/lib/common";
// import "highlight.js/scss"
hljs.registerLanguage('javascript', javascript);

const routes = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/about",
        component:HelloWorld
    },
    {
        path:"/users/:id",
        component:Article,
        props: true
    },
    // {
    //     // 将总是把/users/123/posts重定向到/users/123/profile。
    //     path: '/users/:id/posts',
    //     redirect: to => {
    //       // 该函数接收目标路由作为参数
    //       // 相对位置不以`/`开头
    //       // 或 { path: 'profile'}
    //       return 'profile'
    //     },
    // },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

createApp(App).use(hljsVuePlugin).use(router).mount('#app')
