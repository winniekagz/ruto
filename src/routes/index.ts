import {RouteRecordRaw,createRouter,createWebHistory} from "vue-router" 
import LoginVue from "../Views/Login.vue"
import DashboardVue from "../Views/DashBoard/Dashboard.vue"

 const routes:Array<RouteRecordRaw>=[
  {
    path:"/login",
    name:"Login",
    component:LoginVue
  },
  {
    path:"/",
    name:"Dashboard",
    component:DashboardVue
  }

 ]
 const router=createRouter({
history:createWebHistory(),
routes
 })
 export default router