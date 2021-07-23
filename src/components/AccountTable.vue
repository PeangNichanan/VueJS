<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ปี-เดือน-วัน</th>
                    <th>รายการ</th>
                    <th>รายรับ</th>
                    <th>รายจ่าย</th>
                    <th>ยอดเงินคงเหลือ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(acc,index) in accounts" v-bind:key="index">
                    <td v-if="index !== editIndex">{{acc.date}}</td>
                    <td v-if="index === editIndex">
                      <input type="date" v-model="form.date">
                    </td>


                    <td v-if="index !== editIndex">{{acc.detail}}</td>
                    <td v-if="index === editIndex">
                      <input type="text" v-model="form.detail">
                    </td>


                    <td v-if="index !== editIndex">{{acc.income}}</td>
                    <td v-if="index === editIndex">
                      <input type="text" v-model="form.income">
                    </td>


                    <td v-if="index !== editIndex">{{acc.expense}}</td>
                    <td v-if="index === editIndex">
                      <input type="text" v-model="form.expense">
                    </td>


                    <td v-if="acc.total > 0">{{acc.total}}</td>
                    <td v-else-if="checkTotal(index)">{{acc.total}}</td>

                    <td v-if="index !== editIndex">
                      <button @click="openForm(index, acc)">Click to Edit</button>
                    </td>
                    <td v-if="index === editIndex">
                      <button @click="editAccount">Update</button>
                      <button @click="closeForm">Cancel</button>
                    </td>
                    
                    
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
            accounts:[],
            editIndex: -1,
            form:{
                date:"",
                detail:"",
                income:"",
                expense: "",
                total: ""
            }
        }
    },
    created(){
        this.fetchAccount()
    },
    methods: {
        fetchAccount() {
            //call axtions from store -> store.dispatch('function')
            AccountList.dispatch('fetchAccount')
            this.accounts = AccountList.getters.accounts
   
            console.log(this.accounts)
        },
        openForm(index, account){
            console.log('index', index)
            console.log('account', account)

            this.editIndex = index
            let cloned = JSON.parse(JSON.stringify(account))
            this.form.date = cloned.date
            this.form.detail = cloned.detail
            this.form.income = cloned.income
            this.form.expense = cloned.expense
            // this.form.total = parseInt(this.accounts[index-1].total)+(this.form.income-this.form.expense)
            this.form.total = cloned.total
        },
        closeForm(){
            this.editIndex = -1
            this.form={
                date:"",
                detail:"",
                income:"",
                expense: "",
                total: ""
            }
        },
        checkTotal(index){
            console.log(this.accounts[index]);
            if(index==0){
                this.accounts[index].total = parseInt(this.accounts[index].total)+(this.accounts[index].income-this.accounts[index].expense)
                console.log(this.accounts[index].total);
            }
            else if(index>=1){
                this.accounts[index].total = parseInt(this.accounts[index-1].total)+(this.accounts[index].income-this.accounts[index].expense)
                console.log(this.accounts[index].total);
            }
        },
        editAccount(){
            let payload = {
                index: this.editIndex,
                date: this.form.date,
                detail:this.form.detail,
                income:this.form.income,
                expense: this.form.expense,
                total: this.form.income-this.form.expense
            }
            console.log(payload)
            AccountList.dispatch("editAccount",payload)
            this.closeForm()
        }
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
div{
    margin-left: 15%;
}
tr{
    height: 40px;
}

</style>