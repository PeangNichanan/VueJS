<template>
  <div>
    <account-table></account-table>
    <account-create-form></account-create-form>
  </div>
</template>

<script>

import AccountTable from "@/components/AccountTable";
import AccountCreateForm from "@/components/AccountCreateForm"

export default {
  components: {
    AccountTable,
    AccountCreateForm
    
  }
}
</script>
