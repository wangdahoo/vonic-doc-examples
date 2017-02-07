import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Pages
import ComponentAndService from './components/ComponentAndService.vue'
import MdButton from './components/MdButton.vue'
import Input from './components/Input.vue'
import Search from './components/Search.vue'
import Radio from './components/Radio.vue'
import Checkbox from './components/Checkbox.vue'

// Routes
const routes = [
  { path: '/componentAndService', component: ComponentAndService },
  { path: '/mdButton', component: MdButton },
  { path: '/input', component: Input },
  { path: '/search', component: Search },
  { path: '/radio', component: Radio },
  { path: '/checkbox', component: Checkbox },
]

Vue.use(Vonic.app, {
  routes: routes
})
