import { createRouter, createWebHistory } from "vue-router"
import Homepage from './pages/Homepage.vue'
import Portfolio from './pages/Portfolio.vue'
import Contacts from './pages/Contacts.vue'
import ProjectShow from './pages/projects/Show.vue'

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
        },
        {
            path:'/contacts',
            name:'contacts',
            component: Contacts
        },
        {
            path:'/portfolio/:slug',
            name:'projects.show',
            props: true,
            component: ProjectShow
        }
    ]
})

export { router }