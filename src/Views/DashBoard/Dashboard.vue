<template>
    <div class="bg-background-main h-screen flex ">
        <SidebarVue/>
        <div class="grid gap-2 grid-cols-12 overflow-y: scroll;">

           
            <div class="col-span-12 py-10">
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
                <div class="grid grid-cols-12 gap-2">
                    <div class="xl:col-span-9 md:col-span-12 sm:col-span-12 xs:col-span-12">
                        <div class="grid xl:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 gap-2 p-3">
                            <TopCard name="Mombasa Houses" :active="true" />
                            <TopCard name="Mombasa Houses" :active="false" />
                            <TopCard name="Mombasa Houses"  :active="false" />
                            <TopCard name="Mombasa Houses" :active="false" />
                            <TopCard name="Mombasa Houses" :active="false" />
                        </div>
                        <div class="grid lg:grid-cols-2  sm:grid-cols-1 xs:grid-cols-1 gap-2 p-3">
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
                         <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
    <div class="flex justify-center items-center">  
        <DoughnutChartWithMany/>
    </div>
    <div class="flex justify-center items-center"> 
        <GroupedBar/>
    </div>
                    </div>

                    </div>
                    <div class="xl:col-span-3 md:col-span-12 sm:col-span-12 xs:col-span-12 card bg-light">
                  <MapVue/>
                  <div class="my-2 p-auto flex flex-col">
                     <button class="w-full border border-1 rounded-xl m-2  text-[14px] h-[23px] text-black bg-[#EADBAE4A] flex justify-center items-center">
                            Add Projects
                        <svg width="14" height="14" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
    <path d="M2.57143 6V3.42857H0V2.57143H2.57143V0H3.42857V2.57143H6V3.42857H3.42857V6H2.57143Z" fill="black"/>
    </svg>

                    
                    </button>

                     <button class="w-full border border-1 rounded-xl m-2  text-[14px] h-[23px] text-black bg-[#EADBAE4A] flex justify-center items-center">
                                Add Dynamic Fields
                            <svg width="14" height="14" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
        <path d="M2.57143 6V3.42857H0V2.57143H2.57143V0H3.42857V2.57143H6V3.42857H3.42857V6H2.57143Z" fill="black"/>
        </svg>

                    
                        </button>
                      
                      
                  </div>
                  <DoughNut2/>
                  <GroupedChartB/>
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
import DoughNut2 from '../../components/Charts/DoughNut2.vue';
import GroupedChartB from '../../components/Charts/GroupedChartB.vue';
import SidebarVue from "../../components/Sidebar.vue"
const TopCardWidth:string="105px"
const TopCardHeight:string="80px"
</script>

<style scoped></style>