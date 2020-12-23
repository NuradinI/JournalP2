import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from '../views/loginPage.vue'
import SignUp from '../views/signup.vue'
import Feed from '../views/feed.vue'
import Profile from '../views/profile.vue'
import PostEntrie from '../views/PostEntrie.vue'
import ViewEntries from '../views/viewJournal.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage
  },
  {
    path: "/signup",
    name: "signup-page",
    component: SignUp
  },
  {
    path: "/feed",
    name: "feed-page",
    component: Feed
  },
  {
    path: '/profile',
    name: 'profile-page',
    component: Profile
  },
  {
    path: '/PostEntrie',
    name: "post-entrie",
    component: PostEntrie
  },
  {
    path: '/viewEntries',
    name: "views-entries",
    component: ViewEntries
  }
];

const router = new VueRouter({
  routes
});

export default router;
