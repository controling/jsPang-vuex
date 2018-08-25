import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
const state = {
    count: 3
}

// 修改状态
const mutations = {
    add(state, params){
        state.count += params
    },
    reduce(){
        state.count --
    }
}

// 计算过滤操作
const getters = {
    count(){
        return state.count += 100
    }
}

// 异步修改状态
const actions = {
    addAction(context){
        context.commit('add', 11)
        setTimeout(()=>{context.commit('reduce')}, 3000)
        console.log('我比reduce先执行')
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

// 模块组
const moduleA = {
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
    // state,
    // mutations,
    // getters,
    // actions
    modules: {
        a: moduleA
    }
})