<template>
    <div>
        <table class="accountTable">
            <thead>
                <tr>
                    <th>วัน/เดือน/ปี</th>
                    <th>รายการ</th>
                    <th>รายรับ</th>
                    <th>รายจ่าย</th>
                    <th>ยอดเงินคงเหลือ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(acc,index) in accounts" v-bind:key="index">
                    <td>{{acc.date}}</td>
                    <td>{{acc.detail}}</td>
                    <td>{{acc.income}}</td>
                    <td>{{acc.expense}}</td>
                    <td>{{acc.total}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
import AccountList from '../store/accountStore.js'
export default {
    data(){
        return{
            accounts:[]
        }
    },
    created(){
        this.fetchAccount()
    },
    methods: {
        fetchAccount() {
            this.accounts = AccountList.getters.accounts
   
            console.log(this.accounts)
        },
    }

    
}
</script>

<style scoped lang="scss">
table,th,td{
    border: 1px solid black;
    border-collapse: collapse;
}
th{
    padding: 0px 45px 0px 45px;
}


</style>