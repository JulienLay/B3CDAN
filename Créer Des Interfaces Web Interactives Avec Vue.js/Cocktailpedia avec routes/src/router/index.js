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
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
