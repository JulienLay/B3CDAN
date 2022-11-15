import HomeView from "../views/HomeView.js";
import AboutView from "../views/AboutView.js";
import ContactView from "../views/ContactView.js";
import NotFound from "../views/NotFound.js";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/contactez-nous", name: "contact", component: ContactView },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
