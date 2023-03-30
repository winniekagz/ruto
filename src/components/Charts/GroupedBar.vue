<template>
     <div class="card  w-full bg-light">
          <apexchart type="bar"  :options="chartOptions" :series="series"></apexchart>
     </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue-apexcharts'
import { ref,reactive } from "vue";
const chartOptions = ref({
  chart: {
        type: 'bar',
        height: 350
    },
    
    plotOptions: {
        bar: {
            
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    legend: {
        position: 'top',
         
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May'],
    },
    yaxis: {
        // title: {
        //     text: '$ (thousands)'
        // }
    },
     colors: ['#748774', '#eadbae'],
    fill: {
        opacity: 1,
        
           
    },
    tooltip: {
        y: {
            formatter: function (val:any) {
                return "$ " + val + " thousands"
            }
        }
    }

});
const series = ref([{
   
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, ]
    }, 
])

   
  
</script>

<style scoped>

</style>