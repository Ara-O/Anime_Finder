import { createRouter, createWebHistory } from "vue-router";
import Searchpage from "../mainpages/Searchpage.vue";
import News from "../mainpages/AnimeNewsPage.vue";
import SelectedAnimePage from "../mainpages/SelectedAnimePage.vue";
import latestReleases from "../mainpages/latestReleasesPage.vue";
import Watchlist from "../mainpages/WatchListPage.vue";

const routes = [
  {
    path: "/search",
    name: "Search",
    component: Searchpage,
  },
  {
    path: "/latestreleases",
    name: "Latest Releases",
    component: latestReleases,
  },
  {
    path: "/selectedanime",
    name: "Selected Anime",
    component: SelectedAnimePage,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    component: Watchlist,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Redirecting",
    component: Searchpage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
