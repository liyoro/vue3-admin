<template>
	<section class="app-main">
		<router-view v-slot="{ Component, route }">
			<transition appear name="fade-transform" mode="out-in">
				<keep-alive>
					<component :is="Component" :key="route.path" />
				</keep-alive>
			</transition>
		</router-view>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
	.app-main {
		/* navbar = 50  */
		min-height: calc(100vh - 50px);
		width: 100%;
		position: relative;
		overflow: hidden;
	}
</style>
