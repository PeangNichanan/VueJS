<template>
  <div>
    <br>
    <account-table></account-table>
    <account-create-form></account-create-form>
    <br>
    <br>
    <!-- กราฟไม่ขึ้น -->
    <!-- <chart-account></chart-account> -->
  </div>
</template>

<script>

import AccountTable from "@/components/AccountTable";
import AccountCreateForm from "@/components/AccountCreateForm"
import ChartAccount from "@/components/Chart"




export default {
  components: {
    AccountTable,
    AccountCreateForm,
    ChartAccount,
    
  }
}
</script>
