import { AppStore } from '@/store/modules/app'
import { computed } from 'vue'

/**
 * @description 项目基础配置
 */
export const useAppStore = () => {
	const appStore = AppStore()
	const getCollapsed = computed(() => appStore.menuCollapsed)

	const setCollapsed = (collapsed: boolean) => {
		appStore.setMenuCollapsed(collapsed)
	}

	return {
		getCollapsed,
		setCollapsed
	}
}
