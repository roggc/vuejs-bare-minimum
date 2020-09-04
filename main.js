import Vue from 'vue'
import Hello from './components/Hello.vue'

const vm=new Vue({
    render: h => h(Hello),
})

vm.$mount('#app')