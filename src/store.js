import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        index:'',
        check1: false,
        check2: false
    },
    getters:{},
    mutations:{
        SET_SWITCH1(state){
            state.check1=!state.check1
            console.log(state.check1)
        },
        SET_SWITCH2(state){
            state.check2=!state.check2
        }
        
    },
    actions:{}

});