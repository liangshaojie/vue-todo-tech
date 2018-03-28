import Vue from 'vue'

const app = new Vue({
    el:"#root",
    template:`<div v-text="text">888</div>`,
    data: {
        text:0,
        active:false
    }
})

