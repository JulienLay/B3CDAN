import CocktailPediaView from "../views/CocktailPediaView.js";
import CreditsView from "../views/CreditsView.js";
import NotFoundView from "../views/NotFoundView.js";

const routes = [
  { path: "/", component: CocktailPediaView },
  { path: "/credits", name: "credits", component: CreditsView },
  { path: "/:pathMatch(.*)*", component: NotFoundView },
];

const router = VueRouter.createRouter({
  // history: VueRouter.createWebHistory(),
  // J'ai utilisé createWebHashHistory au lieu de createWebHistory car sinon la page redirige vers la page 404 
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
