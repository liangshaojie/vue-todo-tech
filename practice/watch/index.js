import Vue from 'vue'

const app = new Vue({
    el:"#root",
    template:`
        <div>
            <span>Name:{{name}}</span>
        </div>
    `,
    data: {
        firstName:'Jokcy',
        lastName:'Lou'
    },
    computed: {
        name () {
            return `${this.firstName} ${this.lastName}`
        }
    }
})

