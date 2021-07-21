import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        data:[
            {
                date:"01/07/64",
                detail:"ได้รับเงินเดือน",
                income:10000,
                expense: "",
                total: 10000
            },
            {
                date:"01/07/64",
                detail:"ซื้อของShopee",
                income:"",
                expense: 150,
                total: 9850
            },
            {
                date:"02/07/64",
                detail:"ซื้อขนมขบเคี้ยว",
                income:"",
                expense: 50,
                total: 9800
            }
        ],
    },
    getters:{
        accounts: (state) => state.data
    },
    mutations:{},
    actions:{},
    modules:{}
})