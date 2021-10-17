import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
// import { Vue } from 'vue-class-component'
import '../src/assets/style.css'
// import VueDraggable from 'vue-draggable'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
