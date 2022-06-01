/*
 * @Author: liyoro
 * @since: 2022-03-25 11:19:59
 * @lastTime: 2022-06-01 15:52:02
 */
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const PUBLIC_PATH = 'li'

const publicRoutes: RouteRecordRaw[] = [
	{
		path: '/:pathMatch(.*)',
		redirect: '/404'
	},
	{
		path: '/404',
		component: () => import('@/views/404.vue')
	}
]

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'index',
		redirect: `/${PUBLIC_PATH}`,
		meta: {
			title: '首页'
		}
	},
	{
		path: `/${PUBLIC_PATH}`,
		name: `${PUBLIC_PATH}`,
		component: Layout,
		redirect: `/${PUBLIC_PATH}/home`,
		meta: { title: '管理平台' },
		children: [
			{
				path: `home`,
				component: () => import('@/views/home/index.vue'),
				name: 'home',
				meta: {
					title: '首页'
				}
			}
		]
	},
	{
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		name: 'login',
		meta: { title: '登录' }
	},
	...publicRoutes
]

export default routes
