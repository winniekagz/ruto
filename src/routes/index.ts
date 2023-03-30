import {RouteRecordRaw,createRouter,createWebHistory} from "vue-router" 
import LoginVue from "../Views/Login.vue"
import DashboardVue from "../Views/DashBoard/Dashboard.vue"
import SidebarVue from "../components/Sidebar.vue"
import LayoutVue from "../Layout/Layout.vue"
 const routes:Array<RouteRecordRaw>=[
  {
    path:"/login",
    name:"Login",
    component:LoginVue
  },
  
  {
    path:"/",
    name:"Dashboard",
    components:{
    default:DashboardVue,
    "sidebar":SidebarVue}
  }


 ]
 const router=createRouter({
history:createWebHistory(),
routes
 })
 export default router