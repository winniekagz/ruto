import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueApexCharts from "vue3-apexcharts";


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(router)
.use(vuetify)
.use(VueApexCharts)
.mount('#app')
