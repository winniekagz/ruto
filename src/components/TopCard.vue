
<script lang="ts" setup>
import { toRefs } from 'vue';
   interface props{
    name:string,
    active:boolean,
   
   }
   const Props=defineProps<props>()
   const {name,active}=toRefs(Props)
</script>
<template>
    <div class="card flex justify-center items-center h-[100%] lg:h-[105px] w-[70%] m-6" 
    :class="active?'bg-d-green text-light':'bg-grey  text-black'"
    >
{{ name }}
    </div>
</template>



<style scoped>

</style>