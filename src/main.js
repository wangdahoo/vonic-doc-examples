import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Pages
import ComponentAndService from './components/ComponentAndService.vue'

// Routes
const routes = [
  { path: '/componentAndService', component: ComponentAndService }
]

Vue.use(Vonic.app, {
  routes: routes
})
