import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import  "bootstrap"
import "../public/style.css"
import "./bootstrap.js"
import Swal from 'sweetalert2'



const app = createApp(App)
app.use(router)

app.mount('#app')
