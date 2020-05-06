import SimpleButton from './components/SimpleButton.vue'

import store from './store.js'

export default {
  install (Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.')
    }
    
    options.store.registerModule('simplebutton', store)
 
    Vue.component('simple-button', SimpleButton)
  }
}