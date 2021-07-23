import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        data:[],
    },
    getters:{
        accounts: (state) => state.data
    },
    mutations:{
        fetch(state,{res}){
            state.data = res.data
        },
        add(state,{payload}){
            state.data.push(payload)
  
        },
        edit(state,{payload}){
            state.data = payload
            // state.data[payload.index].date = payload.date
            // state.data[payload.index].detail = payload.detail
            // state.data[payload.index].income = payload.income
            // state.data[payload.index].expense = payload.expense
            // state.data[payload.index].total = payload.total
        }
    },
    actions:{
        fetchAccount({commit}){
            // mock data -> get data from API
            let res = {
                data:[
                    {
                        date:"2021-07-01",
                        detail:"ได้รับเงินเดือน",
                        income:10000,
                        expense: 0,
                        total: 0
                    },
                    {
                        date:"2021-07-01",
                        detail:"ซื้อของShopee",
                        income:0,
                        expense: 150,
                        total: 0
                    },
                    {
                        date:"2021-07-02",
                        detail:"ซื้อขนมขบเคี้ยว",
                        income:0,
                        expense: 50,
                        total: 0
                    }
                ],
            }
            commit("fetch",{res})
        },
        addStatement({commit},payload){
            //todo: call API to add data
            commit("add",{payload})
        },
        editAccount({commit},payload){
            //todo: call API to edit data
            commit("edit",{payload})
        }
    },
    modules:{}
})