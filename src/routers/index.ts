/*
 * @Author: liyoro
 * @since: 2022-03-24 17:00:31
 * @lastTime: 2022-06-09 17:34:43
 */
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// import routes from './modules/index'

// 导入modules中所有router
const metaRouters = import.meta.globEager('./modules/*.ts')

// 处理路由
export const routerArray: RouteRecordRaw[] = []
Object.keys(metaRouters).forEach((item) => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key])
	})
})

const publicRoutes: RouteRecordRaw[] = [
	{
		path: '/:pathMatch(.*)',
		redirect: '/404'
	},
	{
		path: '/404',
		component: () => import('@/views/404.vue')
	},
	{
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		name: 'login',
		meta: { title: '登录' }
	}
]

const routes: RouteRecordRaw[] = [...publicRoutes, ...routerArray]

// app router
export const router = createRouter({
	// 解决 二级路径存在时，路径地址路由不匹配的问题
	// https://juejin.cn/post/7051826951463370760#heading-27
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	// strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 })
})
