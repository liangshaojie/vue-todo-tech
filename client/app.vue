<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <div id="loading" v-show="loading">
            <loading></loading>
        </div>
        <!--<p>  {{counter}}</p>-->
        <!--<p>{{fullName}}</p>-->
        <!--<todo></todo>-->
        <!--<router-link to="/app">app</router-link>-->
        <!--<router-link to="/login">login</router-link>-->
        <!--<tabs>-->
            <!--<tab>-->
                <!--<span slot="lable"></span>-->
                <!--<p>This is tab1</p>-->
            <!--</tab>-->
        <!--</tabs>-->

        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
        <!--<Notification content="test notify"></Notification>-->
        <!--<button @click="notify">notify</button>-->
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from './views/layout/header.vue'
    import Footer from './views/layout/footer.jsx'
    import Todo from './views/todo/todo.vue'
    import Loading from './commponents/loading/loading.vue'
    import {mapGetters,mapState,mapActions,mapMutations} from 'vuex'

    export default {
        metaInfo:{
            title:'Jokcy T0do App'
        },
        components: {
            Header,
            Footer,
            Loading
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
            ...mapState(['loading'])
//            ...mapState({
//                counter:'count',
//            }),
//            ...mapGetters(['fullName']),
        },
        methods:{
//            ...mapActions(['updateCountAsync']),
//            ...mapMutations(['updateCount']),
//            notify() {
//                this.$notify({
//                    content:'test twst',
//                    btn:'close'
//                })
//            }
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


