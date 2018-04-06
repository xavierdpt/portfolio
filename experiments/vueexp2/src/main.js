// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('tatadam', {
  props: ['target'],
  template: '<li>Kudos to {{target}}!</li>'
})

const obj = {
  user: 'User'
}
window.obj = obj

const vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
  data: obj,
  created: function () {
    console.log('Created !')
  },
  mounted: function () {
    console.log('Mounted !')
  },
  updated: function () {
    console.log('Updated !')
  },
  destroyed: function () {
    console.log('Destroyed !')
  },
  computed: {
    zloup: function () {
      // Todo : check that the computed value actually depends only on obj.user, and that when modifying obj or obj.anythinElse, the value is not recomputed
      // but that when modifying obj.user, the value is recomputed
      return this.obj.user.split('').reverse().join()
    },
    zlap: {
      get: function () {
        return 'toto'
      },
      set: function (newValue) {
        // empty
      }
    }
  },
  watch: {
    user: function (newQuestion, oldQuestion) {
      // do nothing
    }
  }
})

if (vue) {
  console.log('Vue instanciated')
}

vue.$watch('obj', function (newValue, oldValue) {
  console.log({newValue, oldValue})
})
