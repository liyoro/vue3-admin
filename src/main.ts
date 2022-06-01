import { createApp } from 'vue'
import App from './App.vue'

// vue Router
import { router } from '@/routers/index'

// CSS common style sheet
import "@/styles/index.scss"

const app = createApp(App)

app.use(router)

app.mount('#app')
