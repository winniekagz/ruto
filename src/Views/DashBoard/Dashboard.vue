<template>
    <div class="bg-background-main h-screen">
        <div class="grid gap-2 grid-cols-12">

            <div class="col-span-1 w-[100%] h-[80vh] rounded-r-large bg-d-green py-10">
                <div class="w-100 ">
                    <img src="images/giftbox.png" alt="giftbox" class="object-none object-right w-24 h-24 mb-16" />
                </div>
                <div class="grid place-items-center mt-12">
                    <img src="images/person.png" alt="giftbox" class="h-[22px] w-[22px] my-3">
                    <img src="images/house.png" alt="giftbox" class="h-[22px] w-[22px] my-3">
                    <img src="images/gear.png" alt="giftbox" class="h-[22px] w-[22px] my-3">
                </div>
            </div>
            <div class="col-span-11 py-10">
                <div class="flex justify-center">
                    <div class=" relative w-[35vw] ">

                        <input type="text" id="voice-search"
                            class=" w-[35vw]
                                 bg-grey border
                                  border-gray-900
                                   text-black text-sm
                                    rounded-lg focus:ring-blue-500 
                                    focus:gray-500 block  pl-10 p-2.5  dark:bg-light-700 dark:border-gray-600 dark:placeholder-black dark:text-dark dark:focus:ring-blue-500 dark:focus:border-black-500"
                            placeholder="Search... " required>
                        <div class="absolute inset-y-0 right-1 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-black dark:text-black" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-6 gap-2">
                    <div class="col-span-5">
                        <div class="grid grid-cols-5 gap-2 p-3">
                            <TopCard name="Mombasa Houses" :active="true" />
                            <TopCard name="Mombasa Houses" :active="false" />
                            <TopCard name="Mombasa Houses"  :active="false" />
                            <TopCard name="Mombasa Houses" :active="false" />
                            <TopCard name="Mombasa Houses" :active="false" />
                        </div>
                        <div class="grid grid-cols-2 gap-2 p-3">
                            <ProjectCard name="Mombasa" :active="true" />
                            <div class="grid grid-cols-2 gap-2">
                                  
                                <DoughnutChart/>
                                  <div class="card h-[26vh] p-4 bg-light">
                                <div class="card bg-d-green text-white h-[18px] m-2 flex justify-center items-center">
                                    Milestones
                                </div>
                                 <div class="card bg-grey text-white flex justify-center items-center m-2 h-[18px]">
                                        Milestones
                                    </div>
                                     <div class="card bg-grey text-white flex justify-center items-center m-2  h-[18px]">
                                        Milestones
                                    </div>
                                    </div>
                                    <div class="col-span-2">
                                        <BudgetComparison/>
                                    </div>

                            </div>
                            
                        
                        </div>
                         <div class="grid grid-cols-2 gap-4">
    <div class="flex justify-center items-center">  
        <DoughnutChartWithMany/>
    </div>
    <div class="flex justify-center items-center"> 
        <GroupedBar/>
    </div>
                    </div>

                    </div>
                    <div class="col-span-1">
                  <MapVue/>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BudgetComparison from '../../components/Charts/BudgetComparison.vue';
import DoughnutChart from '../../components/Charts/DoughnutChart.vue';
import TopCard from '../../components/TopCard.vue';
import ProjectCard from "./ProjectCard.vue"
import DoughnutChartWithMany from "../../components/Charts/DoughnutWithMany.vue"
import GroupedBar from '../../components/Charts/GroupedBar.vue';
import MapVue from "../../components/Maps/map.vue"
const TopCardWidth:string="105px"
const TopCardHeight:string="80px"
</script>

<style scoped></style>