<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>  {{counter}}</p>
        <p>{{fullName}}</p>
        <!--<todo></todo>-->
        <!--<router-link to="/app">app</router-link>-->
        <!--<router-link to="/login">login</router-link>-->
        <router-view></router-view>
        <!--<Notification content="test notify"></Notification>-->
        <button @click="notify">notify</button>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from './views/layout/header.vue'
    import Footer from './views/layout/footer.jsx'
    import Todo from './views/todo/todo.vue'
    import {mapGetters,mapState,mapActions,mapMutations} from 'vuex'

    export default {
        metaInfo:{
            title:'Jokcy T0do App'
        },
        components: {
            Header,
            Footer
        },
        mounted() {

//            let i = 0;
//            setInterval(() => {
//                this.updateCount({
//                    num: ++i,
//                    num2:6
//                })
//            },1000)
//            this.updateCountAsync({
//                num:4,
//                time:3000
//            })
        },
        computed:{
            ...mapState({
                counter:'count',
            }),
            ...mapGetters(['fullName']),
        },
        methods:{
            ...mapActions(['updateCountAsync']),
            ...mapMutations(['updateCount']),
            notify() {
                this.$notify({
                    content:'test twst',
                    btn:'close'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }
</style>


