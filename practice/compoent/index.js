import Vue from 'vue'

const compoent = {
    props:{
        active:Boolean,
        propOne:String,
        onChange:Function
    },
    template:`
        <div>
            <input v-model="text" type="text">
            <span v-show="active" @click="onChangezi">{{propOne}}</span>
        </div>
    `,
    methods:{
        onChangezi() {
            this.onChange();
        }
    },
    data() {
        return {
            text:1
        }
    }
}

// Vue.component('comp',compoent)

new Vue({
    components:{compoent},
    el:'#root',
    template:`
        <div>
            <compoent :active="true" :propOne="'liangshaojie'" :onChange="header"></compoent>
            <compoent :active="false"></compoent>
        </div>
    `,
    methods:{
        header(){
            alert(555);
        }
    }
})