import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { configManualChunk } from './config/vite/optimizer'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
	const isBuild = command === 'build'
	const env = loadEnv(mode, process.cwd(), '')
	console.log(isBuild, env.VITE_BUILD_COMPRESS)

	return {
		// base: import.meta.env.VITE_API_BASE_URL,
		resolve: {
			// alias: {
			//   '@': path.resolve(__dirname, 'src'),
			// },
			alias: [
				{
					find: '@',
					replacement: '/src'
				},
				{
					find: 'images',
					replacement: '/src/assets/images/'
				},
				{
					find: 'components',
					replacement: '/src/components'
				}
			]
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/styles/variables.scss" as *;`
					// additionalData: `@import "@/styles/variables.scss";`
				}
			}
		},
		// server
		server: {
			hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
			// 服务配置
			port: 3000, // 类型： number 指定服务器端口;
			open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
			cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
			host: '0.0.0.0', // IP配置，支持从IP启动
			proxy: {
				'/api': {
					target: '',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		},
		// build
		build: {
			target: 'es2015',
			minify: 'terser',
			terserOptions: {
				compress: {
					keep_infinity: true,
					drop_debugger: true,
					drop_console: true
				}
			},
			rollupOptions: {
				output: {
					manualChunks: configManualChunk
				}
			},
			// Turning off brotliSize display can slightly reduce packaging time
			brotliSize: false,
			chunkSizeWarningLimit: 2000
		},
		// plugins
		plugins: [
			vue(),
			vueJsx(),
			// name 可以写在 script 标签上
			vueSetupExtend(),
			AutoImport({
				imports: ['vue', 'vue-router'],
				dts: 'src/auto-imports.d.ts',
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				// relative paths to the directory to search for components.
				dirs: ['src/components'],
				// valid file extensions for components.
				extensions: ['vue'],
				// search for subdirectories
				deep: true,
				// resolvers for custom components
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
				// generate `components.d.ts` global declarations,
				// also accepts a path for custom filename
				// dts: false,
				dts: 'src/components.d.ts',

				// Allow subdirectories as namespace prefix for components.
				directoryAsNamespace: false,
				// Subdirectory paths for ignoring namespace prefixes
				// works when `directoryAsNamespace: true`
				globalNamespaces: [],
				// auto import for directives
				// default: `true` for Vue 3, `false` for Vue 2
				// Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
				// To install Babel, run: `npm install -D @babel/parser @babel/traverse`
				directives: true,
				// filters for transforming targets
				include: [/\.vue$/, /\.vue\?vue/],
				exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
			}),
			// gzip compress
			env.VITE_BUILD_COMPRESS &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: 'gzip',
					ext: '.gz'
				})
		]
	}
}
