import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'


createApp(App).use(FloatingVue).use(VueUniversalModal, { teleportTarget: '#modals' }).use(router).mount('#app')

