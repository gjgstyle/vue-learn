import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes :[{
      path:'/home/:id',
      name:'home',
      component:() => import('../views/Home.vue'),
      children:[{
        path:'/child',
        component:() => import('../views/Child.vue'),
      }]
  }
  ]
})

export default router
