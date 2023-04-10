import Vue from 'vue'
import App from './App.vue'
// import FriendsContact from './components/FriendContact.vue';
// Vue.component('FriendContact' , FriendContact)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
