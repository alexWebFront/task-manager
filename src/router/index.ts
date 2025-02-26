import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotesView from "@/views/NotesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: NotesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
