import { createApp } from 'vue'
import App from './App.vue'

// vue Router
import router from "@/routers/index"

const app = createApp(App)

app.use(router)

app.mount('#app')
