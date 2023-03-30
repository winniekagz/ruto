<template>
    <div>
        <!-- <v-text-field 
        :label="label"
         variant="outlined"
          v-model="val"
  
  class=" bg-inherit   text-gray-400 focus:outline-white border border-red-600" ></v-text-field> -->

  <div class="relative m-3">
    <input type="text" placeholder="Input email" v-model="val" autocomplete="email"
    class="peer w-full   rounded-large border border-gray-300 p-3 shadow focus:shadow-light placeholder:text-transparent 
    focus:border-none  focus:ring-2 focus:ring-white focus:border-light focus:outline-none" />
    <label for="email"
    class="bg-inherit pointer-events-none absolute top-0 left-8 ml-3 origin-left -translate-y-1/2 transform
    px-1 text-sm text-gray-500 translate-all duration-100 ease-in-out peer-placeholder-shown:top-1/2
    peer-placeholder-shown:text-base peer-placeholder-shown:ml-4 peer-placeholder-shown:text-gray-400
    peer-focus:top-0 peer-focus:ml-4 peer-focus:text-sm peer-focus:text-gray-800">
    {{label}}
  </label>
  </div>

  
    </div>
</template>

<script lang="ts" setup>
import { toRefs,computed } from 'vue';
interface props{
    label:string
    modelValue:string|number,
    uniqueid:string
}
const Props=defineProps<props>()
const {label,modelValue,uniqueid}=toRefs(Props)
const emit=defineEmits(["update:modelValue"])


const val = computed({
    get() {
      return modelValue.value
    },
    set(val) {
      emit('update:modelValue', val)
    }
  })
</script>

<style scoped>
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}
</style>