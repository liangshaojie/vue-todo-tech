import Vue from 'vue'

const app = new Vue({
    el:"#root",
    template:`
        <div>
            {{ isActive ? 'isAct' : 'noIsAct'}}
        </div>
    `,
    data: {
        isActive:false
    }
})



