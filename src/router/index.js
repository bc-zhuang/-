import vue from 'vue'
import vueRouter from "vue-router";
import Login from "@/components/user/Login.vue";
import Index from "@/components/administrator/Index.vue";
import Home from "@/components/user/Home.vue";
import Reserve from "@/components/user/Reserve.vue";
import Guide from "@/components/user/Guide.vue";
import Notice from "@/components/user/Notice.vue";
import Query from "@/components/user/Query.vue";
import Main from "@/components/user/Main.vue";

vue.use(vueRouter)

const router=new vueRouter({
    routes:[
        {path:'/Login', component:Login},
        {path:'/Index', component:Index},
        {
            path:'/Home',
            component:Home,
            children:[
                {path:'Main',component:Main},
                {path:'Reserve',component:Reserve},
                {path:'Guide',component:Guide},
                {path:'Notice',component:Notice},
                {path:'Query',component:Query}
            ]},
        {path:'/', redirect:'/Home/Main'},
    ]
})

export default router
