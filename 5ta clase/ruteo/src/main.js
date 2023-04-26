import { createApp } from 'vue'

import {createRouter, createWebHistory} from "vue-router"

import './assets/main.css'

import App from './App.vue'
import Index from './components/views/index.vue'
import Personajes from './components/views/personajes.vue'
import Personaje from './components/views/personaje.vue'
import Locations from './components/views/locations.vue'
import Location from './components/views/location.vue'

const routes = [
    {path: '/', component: Index},
    {path: '/personajes', component: Personajes},
    {path: '/personaje/:id', component: Personaje},
    {path: '/locations', component: Locations},
    {path: '/location/:id', component: Location}
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
createApp(App).use(router).mount('#app')
