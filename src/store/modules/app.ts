import { defineStore } from 'pinia'

interface AppState {
	// left menu
	menuCollapsed: boolean
}

export const AppStore = defineStore({
	id: 'app',
	state: (): AppState => ({
		menuCollapsed: true
	}),
	getters: {
		getMenuCollapsed: (state) => {
			return state.menuCollapsed
		}
	},
	actions: {
		async setMenuCollapsed(collapsed: boolean) {
			this.menuCollapsed = collapsed
		}
	}
})
