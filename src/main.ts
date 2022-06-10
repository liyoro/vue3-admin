import { createApp } from 'vue'
import App from './App.vue'

import { router } from '@/routers/index'
import { setupStore } from '@/store'

// CSS common style sheet
import '@/styles/index.scss'

const app = createApp(App)

// vue Router
app.use(router)
// pinia
setupStore(app)

// 注意：在服务器端，你需要手动跳转到初始地址。
router.isReady().then(() => app.mount('#app'))
