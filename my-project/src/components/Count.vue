<template>
    <div>
        <h1>{{msg}}</h1>
        <hr>
        <p>{{$store.state.count}} --  {{count}}</p>
        <!-- 模块组获取数据 -->
        <p>{{$store.state.a.count}} --  {{count}}</p>
        <div>
            <p>mutations</p>
            <button @click="$store.commit('add', 10)">+</button>
            <button @click="reduce">-</button>
        </div>
        <div>
            <p>actions</p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>
</template>
<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            msg: 'hello vuex'
        }
    },
    // computed: {
    //     count(){
    //         return this.$store.state.count
    //     }
    // },

    // computed: mapState({
    //     count: state => state.count
    // }),

    // computed: mapState(['count']),
    computed: {
        ...mapState(['count']),
        ...mapGetters(['count'])
    },

    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    },
    store
}
</script>
