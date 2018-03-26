import Vue from 'vue'
const app = new Vue({
    template:'<div>this is content {{text}}</div>',
    data:{
        text:'44444444'
    }
})
app.$mount('#root')

console.log(app)