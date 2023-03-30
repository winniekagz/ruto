<template>

    <div class="" >
        <div class="chaart card h-[26vh] flex justify-start items-center flex-col bg-light">
      <canvas id="myChartt"  ></canvas>
      <p class="font-bold">Completed</p>
      </div>
    </div>
  </template>
  
 <script lang="ts" setup>
 import Chart from 'chart.js/auto';
 import { Plugin , DoughnutController } from "chart.js"
 import { registerables } from 'chart.js';
 // import Config from 'chart.js/dist/core/core.config';
 import { onMounted ,ref} from 'vue';

 const data=ref(97)
 type DoughnutChartBackgroundPluginOptions = {
   enabled: boolean
   color: string
 }
 //plugin
 Chart.register(...registerables)
 onMounted(() => {
   const ctx: any = document.getElementById('myChartt');
   const doughnutLabelPlugin: Plugin = {
     id: 'doughnutLabelPlugin',
     beforeDraw: (chart: Chart) => {
       const ctx = chart.ctx;
       const chartArea = chart.chartArea;
       ctx.save();
       ctx.arc(chartArea.left+(chartArea.width/2), chartArea.top+(chartArea.height/2), (chartArea.height / 2), 0,360)
       ctx.fillStyle = '#d9d9d9';
       ctx.fill();
       ctx.fillStyle = "black";
       // ctx.fillRect(chartArea.left+(chartArea.width/2), chartArea.top+(chartArea.height/2), 10, 10)
       ctx.font = "14px sans-serif"
       ctx.textAlign = "center"
       ctx.fillText("97%", chartArea.left + (chartArea.width / 2), chartArea.top + (chartArea.height / 2))
     

     },

   }

   new Chart(ctx, {
     type: 'doughnut',
     data: {
      //  labels: ['' ],
       datasets: [{
         label: `${data.value} of Votes` ,
         data: [data.value,(100-data.value)],
           backgroundColor: [
           'rgba(75, 102, 77, 1)',
          '#ffffff'
         ],
         borderWidth: 0,


       }],

     },

     options: {
   
       scales: {
         y: {
           beginAtZero: true,
           display:false,
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
       cutout: '80%',
       responsive: true,
       layout: {
         padding: 20
       },
       plugins: {

       },
     },
     plugins: [doughnutLabelPlugin],
     legend: {
         display: true,
         labels: {
           color: 'red'
         }
        }
      
    
   
   })
 })


 </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>