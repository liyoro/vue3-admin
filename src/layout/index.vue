<template>
	<div :class="classObj" class="app-wrapper">
		<div :class="{ hasTagsView: needTagsView }">
			<app-main />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed, unref } from 'vue'
	import { AppMain } from './components'
	import { useAppStore } from '@/hooks/useApp'
	import { tagsView } from '../../config'

	export default defineComponent({
		name: 'DefaultLayout',
		components: {
			AppMain
		},
		setup() {
			const { getCollapsed } = useAppStore()

			const classObj = computed(() => {
				let cls: string[] = []
				if (unref(getCollapsed)) {
					// cls.push('ant-layout-has-sider')
				}
				return cls
			})
			const needTagsView = unref(tagsView)

			return {
				classObj,
				needTagsView
			}
		}
	})
</script>

<style lang="scss">
	.app-wrapper {
		position: relative;
		height: 100%;
		width: 100%;
	}
</style>
