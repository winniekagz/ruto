<template>
    <div class="card h-[47vh] w-[70%] bg-light">
        <canvas id="myChart"></canvas>
    </div>
</template>

<script lang="ts" setup>
import Chart from 'chart.js/auto';
import { Plugin } from "chart.js"
import { registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import Config from 'chart.js/dist/core/core.config';
import { onMounted } from 'vue';
//plugin
Chart.register(...registerables)
Chart.register(ChartDataLabels);
onMounted(() => {
    const ctx: any = document.getElementById('myChart');
  
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [40, 19, 11, 30, 20],
                       backgroundColor: [
                    
                    
                    
                    
                    "#eadbae", 
                    '#004b40',
                    '#3f6f54',
                    "#75936c",
                    "#aeb789",
                ],
                borderWidth: 0,


            }],

        },

        options: {
            scales: {
                y: {
                    display:false,
                    beginAtZero: true,
                    grid: {
                        display: false
                    }

                },
                x: {
display:false,
                    grid: {
                        display: false
                    }

                },

            },
            cutout: '60%',
            responsive: true,
            layout: {
                padding: 20
            },
            plugins: {
                  datalabels: {
                     formatter: function (value, context:any) {
                        return context.chart.data.labels[context.dataIndex]
                        console.log("value",value)
                        // return context.chart.data.labels[context.dataIndex];
                    },
                      
                    labels: {
                       
                        title: {
                            color: 'blue',
                            
                        },
                      
                       
                    },
                    anchor:"end",
                    align:'left'
                }
            }
                

            



        },
       
    })
})


</script>

<style scoped>
.chaaart {
    width: 500px;
    height: 500px;
}
</style>

<style scoped></style>