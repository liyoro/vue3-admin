/*
 * @Author: liyoro
 * @since: 2022-03-25 11:19:59
 * @lastTime: 2022-06-09 17:39:17
 */
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const demoRouter: RouteRecordRaw[] = [
	{
		path: `/demo`,
		component: Layout,
		redirect: `/demo/demo1`,
		meta: { title: '例子' },
		children: [
			{
				path: `/demo/demo1`,
				name: 'demo1',
				component: () => import('@/views/demo/demo1/index.vue'),
				meta: { title: 'demo1' }
			},
			{
				path: `/demo/demo2`,
				name: 'demo2',
				component: () => import('@/views/demo/demo2/index.vue'),
				meta: { title: 'demo2' }
			}
		]
	}
]

export default demoRouter
