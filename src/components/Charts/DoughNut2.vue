<template>
    <div id="chart" class="card bg-light flex justify-center items-center my-4">
            <apexchart class="-legend" width="100%" type="donut" :options="chartOptions" :series="series" :labels="labels"></apexchart>
          </div>
</template>

<script lang="ts" setup>
  import {ref } from "vue"
const series=ref([44, 55, 41, 17, 15],)
const labels=ref(["win","kagz","njeru","mille","chris"])
 const chartOptions=ref({
    plotOptions: {
        pie: {
            donut: {
                size: '50%'
            }
        }
    },
    colors:[
        "#eadbae",
        '#004b40',
        '#3f6f54',
        "#75936c",
        "#aeb789",],
    fill: {
        opacity: 1,

        colors: [
            "#eadbae",
            '#004b40',
            '#3f6f54',
            "#75936c",
            "#aeb789",]
    },
    labels:["Project A", "Project B", "Project C", "Project D", "Project E"],
    dataLabels:{
        enabled: false,
    },
   legend:{
    position:"left",
    align:"right",
    float:true
   }

      
 }

 )   
        
     
       
</script>

<style scoped>



.apexcharts-legend {
  justify-content: start !important;
  top: 0 !important;
}

</style>