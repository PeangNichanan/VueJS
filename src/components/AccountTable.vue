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
                    <th>การดำเนินการ</th>
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


                    <td v-if="checkTotal(index)">{{acc.total}}</td>
                    <td v-else-if="true">{{acc.total}}</td>
                    

                    <td v-if="index !== editIndex">
                      <button @click="openForm(index, acc)">แก้ไข</button>
                    </td>
                    <td v-if="index === editIndex">
                      <button @click="editAccount">ยืนยัน</button>
                      <button @click="closeForm">ยกเลิก</button>
                    </td>
                        
                </tr>
            </tbody>
        </table>
        <br>
        <label>ยอดเงินคงเหลือสุทธิ(บาท) : {{accounts[accounts.length-1].total}}</label>
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
            },
            
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
            // console.log('index', index)
            // console.log('account', account)

            this.editIndex = index
            let cloned = JSON.parse(JSON.stringify(account))
            this.form.date = cloned.date
            this.form.detail = cloned.detail
            this.form.income = cloned.income
            this.form.expense = cloned.expense
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
            // console.log(this.accounts[index]);
            if(index==0){
                this.accounts[index].total = this.accounts[index].income-this.accounts[index].expense
                console.log(this.accounts[index].total);
            }
            else if(index>=1){
                this.accounts[index].total = parseInt(this.accounts[index-1].total)+(this.accounts[index].income-this.accounts[index].expense)
                console.log(this.accounts[index].total);
            }
        },
        editAccount(){
            let payload = this.accounts
            let keep = payload[this.editIndex]

            payload[this.editIndex].date = this.form.date
 
            payload.sort(function(a, b) {
                    if (a.date < b.date) {
                        return -1;
                    }
                    else if (a.date > b.date) {
                        return 1;
                    }
                    return 0;
            })
            console.log(payload);
            this.editIndex = payload.indexOf(keep)

 
 
            for (let i = this.editIndex; i < this.accounts.length; i++) {
                if (i == this.editIndex ) {
                    payload[i].index = this.editIndex
                    payload[i].detail = this.form.detail
                    payload[i].income = parseInt(this.form.income)
                    payload[i].expense = parseInt(this.form.expense)
                    if (i==0 && payload[i].income !== 0 && payload[i].expense == 0) {
                        payload[i].total = this.form.income
                    }
                    else if(i==0 && payload[i].expense != 0){
                        payload[i].total = 0-this.form.expense
                    }
                    else{
                        payload[i].total = parseInt(this.accounts[i-1].total)+(this.form.income-this.form.expense)
                    }
                    
                }
                else{
                    payload[i].date = this.accounts[i].date
                    payload[i].detail = this.accounts[i].detail
                    payload[i].income = this.accounts[i].income
                    payload[i].expense = this.accounts[i].expense
                    payload[i].total = parseInt(this.accounts[i-1].total)+(this.accounts[i].income-this.accounts[i].expense)
                }
                
            }

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
    margin-left: 10%;
    font-size: 13pt;
}
th{
    padding: 0px 45px 0px 45px;
    background-color: rgb(254, 225, 188);
    height: 60px;
}
td{
    height: 40px;
}
label{
    position: absolute;
    left: 10%;
    font-size: 17pt;
}
button{
    background-color: rgb(230, 147, 102);
    border-radius: 10px;
    padding: 4px 15px 4px 15px;
}

button:hover{
    background-color: rgb(255, 234, 143);
}

</style>