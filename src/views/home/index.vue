<template>
	<div>首页</div>
	<div>{{ test }}</div>
	<el-button type="primary">Primary</el-button>
</template>

<script setup lang="ts">
	import { useAppStore } from '@/hooks/useApp'
	const { getCollapsed } = useAppStore()
	const test = ref(getCollapsed)
</script>

<style lang="scss">
	@import './index.scss';
</style>
