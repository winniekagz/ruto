<template>
    <div>
        <v-text-field 
        :label="label"
         variant="outlined"
          style="border-radius: 30% !important"
          v-model="val"
  
  class=" bg-inherit   text-gray-400 focus:outline-white rounded-xl" ></v-text-field>

  
    </div>
</template>

<script lang="ts" setup>
import { toRefs,computed } from 'vue';
interface props{
    label:string
    modelValue:string|number
}
const Props=defineProps<props>()
const {label,modelValue}=toRefs(Props)
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