import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Pages
import ComponentAndService from './components/ComponentAndService.vue'
import MdButton from './components/MdButton.vue'

// Routes
const routes = [
  { path: '/componentAndService', component: ComponentAndService },
  { path: '/mdButton', component: MdButton }
]

Vue.use(Vonic.app, {
  routes: routes
})
