<template>
    <div class="adding">
        <h3>เพิ่มรายการรายรับรายจ่าย</h3>
        <table>
            <tr>
                <td><label for="date">วันที่ทำรายการ :</label></td>
                <td><input type="date" v-model="form.date"></td>
            </tr>
            <tr>
                <td><label for="detail">รายการ :</label></td>
                <td><input type="text" v-model="form.detail"></td>
            </tr>
            <tr>
                <td><label for="income">รายรับ :</label></td>
                <td><input type="text" v-model="form.income"></td>
            </tr>
            <tr>
                <td><label for="expense">รายจ่าย :</label></td>
                <td><input type="text" v-model="form.expense"></td>
            </tr>
        </table>
        <br>
        <button @click="addStatement">เพิ่มรายการ</button>
    </div>
</template>

<script>
import AccountList from '@/store/accountStore'
export default {
    data(){
        return{
            form:{
                date:"",
                detail:"",
                income:"",
                expense: "",
                total: ""
            }
        }
    },
    methods:{
        clearForm(){
            this.form={
                date:'',
                detail:'',
                income:'',
                expense: '',
                total: ''
            }
        },
        addStatement(){
            if (this.form.income == ""){
                this.form.income = 0
            }
            if (this.form.expense == "") {
                this.form.expense = 0
            }
            let payload={
                date: this.form.date,
                detail: this.form.detail,
                income: this.form.income,
                expense: this.form.expense,
                total: 0
            }
            console.log(payload);
            AccountList.dispatch('addStatement',payload)
            this.clearForm()
    }
    },
}
</script>

<style scoped lang="scss">

.adding{
    display: block;
    position: absolute;
    right: 5%;
    background-color: rgb(255, 196, 70);
    padding: 20px;
    top: 230px;
    // box-shadow: 2px 2px darkgray;
    padding: 25px 25px 25px 25px;
}
table{
    text-align: right;
}

button{
    background-color: rgb(255, 147, 45);
    border-radius: 10px;
    padding: 5px 15px 5px 15px;
}

button:hover{
    background-color: rgb(255, 234, 143);
}


</style>