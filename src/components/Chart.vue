<template>
  <div class="my-app">
    
    <!-- chart -->
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
      :title="chart_title"
    ></D3BarChart>


  </div>
</template>

<script>
import { D3BarChart } from 'vue-d3-charts';
import AccountList from '@/store/accountStore'
// import groupBy from 'lodash/groupBy';

export default {
  components: {
    D3BarChart,
  },
  data() {
    return {
        chart_title: 'กราฟรายรับรายจ่าย',
        chart_data: [],
        chart_config: {
            key: "",
            values: "",
            color: {
            default: '#222f3e',
            }
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
            // let arr = AccountList.getters.arr

            this.chart_data = AccountList.getters.chart_data
            

            this.chart_config.key = "date"
            this.chart_config.values = "total"


            console.log("here");
            console.log(this.chart_data)
        }
    }

}
</script>
