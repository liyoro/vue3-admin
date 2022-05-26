/// <reference types="vite/client" />

// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

interface ImportMetaEnv {
  readonly ENV: string,
  readonly VITE_PORT: number,
  readonly VITE_API_BASE_URL: string,
  readonly VITE_API_SERVER_URL: string,
  readonly VITE_MOCK_API_BASE_URL: string,
  readonly VITE_MOCK_API_SERVER_URL: string,
	readonly VITE_BUILD_COMPRESS: boolean,
	readonly VITE_DROP_CONSOLE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}