import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueEcharts from 'vue-echarts'
import 'echarts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-chart', VueEcharts)

app.mount('#app')
