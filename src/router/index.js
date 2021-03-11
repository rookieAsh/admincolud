import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";
// import Home1 from "../components/Home.vue";
// import User from "../components/User.vue";
// import Dec from "../components/Dec.vue";
// import Quantization from "../components/Quantization.vue";
// import Lianghua from "../components/Lianghua.vue";
// import Check from "../components/Check.vue";
// import Out from "../components/Out.vue";
// import In from "../components/In.vue";
// import Userinfo from "../components/Userinfo.vue";
// import WealthAll from "../components/WealthAll.vue";
// import ExchangeTail from "../components/ExchangeTail.vue";

// 新项目
import userManage from "../components/userManage.vue";
import assetWater from "../components/assetWater.vue";
import goodsManage from "../components/goodsManage.vue";
import orderManage from "../components/orderManage.vue";
import assetManage from "../components/assetManage.vue";
import activityManage from "../components/activityManage.vue";
import permissionManage from "../components/permissionManage.vue";




Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/userManage" },
  // { path: "/login", component: Login },
  {
    path: "/Home",
    component: Home,
    redirect: "/Home",
    children: [
      // { path: "/home1", component: Home1 },
      // { path: "/userinfo", component: Userinfo },
      // { path: "/user1", component: User },
      // { path: "/dec", component: Dec },
      // { path: "/quantization", component: Quantization },
      // { path: "/lianghua", component: Lianghua },
      // { path: "/check", component: Check },
      // { path: "/out", component: Out },
      // { path: "/in", component: In },
      // { path: "/wealthAll", component: WealthAll },
      // { path: "/exchangeTail", component: ExchangeTail },
      // 新项目
      { path: "/userManage", component: userManage },
      { path: "/assetWater", component: assetWater },
      { path: "/goodsManage", component: goodsManage },
      { path: "/orderManage", component: orderManage },
      { path: "/assetManage", component: assetManage },
      { path: "/activityManage", component: activityManage },
      { path: "/permissionManage", component: permissionManage },
    ]
  }
];

const router = new VueRouter({
  routes
});

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示放行
//   //     next()  放行    next('/login')  强制跳转

//   if (to.path === '/login') return next()
//   // 获取token
//   const token = window.sessionStorage.getItem('token')
//   if (!token) return next('/login')
//   next()
// })

export default router;
