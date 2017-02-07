import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Pages
import ComponentAndService from './components/ComponentAndService.vue'
import MdButton from './components/MdButton.vue'
import Input from './components/Input.vue'
import Search from './components/Search.vue'

// Routes
const routes = [
  { path: '/componentAndService', component: ComponentAndService },
  { path: '/mdButton', component: MdButton },
  { path: '/input', component: Input },
  { path: '/search', component: Search },
]

Vue.use(Vonic.app, {
  routes: routes
})
