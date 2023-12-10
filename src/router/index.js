import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriversView from '../views/DriversView.vue'
import BussesView from '../views/BussesView.vue'
import AssignmentsView from '../views/AssignmentsView.vue'
import ContactsView from '../views/ContactsView.vue'
import BussesEdit from '../views/BussesEdit.vue'
import DriversEdit from '../views/DriversEdit.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
    {
        path: '/drivers/edit/:id?',
        name: 'drivers-config',
        component: DriversEdit,
    },
    {
        path: '/busses',
        name: 'busses',
        component: BussesView,
    },
    {
        path: '/busses/edit/:id?',
        name: 'busses-config',
        component: BussesEdit,
    },
    {
        path: '/assignments',
        name: 'assignments',
        component: AssignmentsView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
