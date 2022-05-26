/*
 * @Author: liyoro
 * @since: 2022-03-24 17:00:31
 * @lastTime: 2022-05-26 14:46:19
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules/index'

// app router
export const router = createRouter({
  // 解决 二级路径存在时，路径地址路由不匹配的问题
  // https://juejin.cn/post/7051826951463370760#heading-27
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
