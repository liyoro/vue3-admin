import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  console.log(command, mode)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: import.meta.env.VITE_API_BASE_URL,
    resolve: {
      // alias: {
      //   '@': path.resolve(__dirname, 'src'),
      // },
      alias: [
        {
          find: '@',
          replacement: '/src',
        },
        {
          find: 'images',
          replacement: '/src/assets/images/',
        },
        {
          find: 'components',
          replacement: '/src/components',
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
    },
    // server
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: import.meta.env.VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      // host: '0.0.0.0', // IP配置，支持从IP启动
      // proxy: {
			// 	"/api": {
			// 		target: "",
			// 		changeOrigin: true,
			// 		rewrite: path => path.replace(/^\/api/, "")
			// 	}
			// }
    },
    // build
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
					drop_debugger: true,
          drop_console: import.meta.env.VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        output: {
          // manualChunks: configManualChunk
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000
    }
  }
})
