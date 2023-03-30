<template>
    <div>

    </div>
</template>

<script lang="ts" setup>
 import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
 import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import {ref,computed} from "vue"
 Chart.register(...registerables)

 const dataValues= ref([30, 40, 60, 70, 5]);
 const dataLabels=ref(["Milestone A","Milestone B","Milestone C","Milestone D","Milestone E"])
  const toggleLegend=ref(true) 

  const testData=computed<ChartData<'doughnut'>>(()=>({
    labels:dataLabels.value,
    datasets: [
          {
            data: dataValues.value,
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          },
        ],
  }))

  const options=computed<ChartOptions<'doughnut'>>(()=>({
    scales:{
         myScale: {
            type: "logarithmic",
            position: toggleLegend.value ? "left" : "right",
          },
    }
  }))
</script>

<style scoped>

</style>