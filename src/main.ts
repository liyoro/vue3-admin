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

app.mount('#app')
