import Vue from 'vue'
import VueRouter from 'vue-router'
//各个组件的懒加载
const Home = () => import('../views/home/HomeTab')
const Cart = () => import('../views/cart/CartTab')
const Category = () => import('../views/category/CategoryTab')
const Profile = () => import('../views/profile/ProfileTab')
const DeTail = () => import('../views/detail/DeTail')

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//1.安装插件
Vue.use(VueRouter)

//2.创建router实例
const routes = [{
  path: '',
  redirect: '/home'
},
{
  path: '/cart',
  component: Cart
},
{
  path: '/category',
  component: Category
},
{
  path: '/home',
  component: Home
},
{
  path: '/profile',
  component: Profile
},
{
  path: '/detail/:iid',
  component: DeTail
},
]
const router =new VueRouter({
  routes,
  mode:"history"
  // 改成了不带井号键的
})

export default router