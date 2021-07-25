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
            if (payload.date >= state.data[state.data.length-1].date) {
                state.data.push(payload)
            }
            else if(payload.date < state.data[0].date){
                payload.total = payload.income-payload.expense
                state.data.splice(0,0,payload)
            }
            else{
                for (let i = 0; i < state.data.length; i++) {
                    if (payload.date >= state.data[i].date && payload.date < state.data[i+1].date) {
                        state.data.splice(i+1,0,payload)
                        break
                    }
                    console.log(state.data);
                    
                }
            }
        //     state.data.push(payload)

        //     state.data.sort(function(a, b) {
        //         if (a.date < b.date) {
        //             return -1;
        //         }
        //         else if (a.date > b.date) {
        //             return 1;
        //         }
        //         return 0;
        // })
  
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
                    },
                    {
                        date:"2021-07-10",
                        detail:"ซื้อชานมไข่มุก",
                        income:0,
                        expense: 40,
                        total: 0
                    },
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