/**
 * @name permission
 * @description 全局路由过滤、权限过滤
 */

import { router } from './index'
import { getToken } from '../utils/auth'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to: any, _, next) => {
  console.log(222, to)
  const hasToken = getToken()
  if (hasToken) {
    // 已登录
    next()
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
