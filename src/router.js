import { createRouter, createWebHistory } from "vue-router"
import Homepage from './pages/Homepage.vue'
import Portfolio from './pages/Portfolio.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: Homepage,
        },
        {
            path:'/projects',
            name:'projects',
            component: Portfolio,
        }
    ]
})

export { router }