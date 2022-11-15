import Home from "../src/views/Home"
import About from "../src/views/About"

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },  
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })

export default router;