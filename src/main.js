import './style.css'

import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Pages
import ComponentAndService from './components/ComponentAndService.vue'
import MdButton from './components/MdButton.vue'
import Input from './components/Input.vue'
import Search from './components/Search.vue'
import Radio from './components/Radio.vue'
import Checkbox from './components/Checkbox.vue'
import Toggle from './components/Toggle.vue'
import ToastAndLoading from './components/ToastAndLoading.vue'
import List from './components/List.vue'
import Cells from './components/Cells.vue'
import Tabs from './components/Tabs.vue'
import ButtonBar from './components/ButtonBar.vue'
import Scalable from './components/Scalable.vue'
import Swiper from './components/Swiper.vue'
import Scroll from './components/Scroll.vue'
import Cascade from './components/Cascade.vue'
import Dialog from './components/Dialog.vue'
import Popup from './components/Popup.vue'
import Modal from './components/Modal.vue'
import ActionSheet from './components/ActionSheet.vue'
import Sidebar from './components/Sidebar.vue'

import Tabbar from './components/Tabbar.vue'
import TabbarHome from './components/tabbar/Home'
import TabbarCart from './components/tabbar/Cart'
import TabbarDiscount from './components/tabbar/Discount'
import TabbarUser from './components/tabbar/User'
import PageFromTabbar from './components/tabbar/PageFromTabbar'

// Routes
const routes = [
  { path: '/componentAndService', component: ComponentAndService },
  { path: '/mdButton', component: MdButton },
  { path: '/input', component: Input },
  { path: '/search', component: Search },
  { path: '/radio', component: Radio },
  { path: '/checkbox', component: Checkbox },
  { path: '/toggle', component: Toggle },
  { path: '/toastAndLoading', component: ToastAndLoading },
  { path: '/list', component: List },
  { path: '/cells', component: Cells },
  { path: '/tabs', component: Tabs },
  { path: '/buttonbar', component: ButtonBar },
  { path: '/scalable', component: Scalable },
  { path: '/swiper', component: Swiper },
  { path: '/scroll', component: Scroll },
  { path: '/cascade', component: Cascade },
  { path: '/dialog', component: Dialog },
  { path: '/Popup', component: Popup },
  { path: '/modal', component: Modal },
  { path: '/actionsheet', component: ActionSheet },
  { path: '/sidebar', component: Sidebar },

  // tabbar
  {
    path: '/tabbar',
    component: Tabbar,
    children: [
      { path: 'home', component: TabbarHome },
      { path: 'cart', component: TabbarCart },
      { path: 'discount', component: TabbarDiscount },
      { path: 'user', component: TabbarUser },
    ]
  },

  { path: '/pageFromTabbar', component: PageFromTabbar },

]

Vue.use(Vonic.app, {
  routes: routes
})
