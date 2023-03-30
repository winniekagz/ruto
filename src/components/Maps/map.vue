<template>
   
    <GoogleMap :api-key="API_KEY" style="width: 100%; height: 180px; border-radius: 108px;" :center="center" :zoom="9">
        <!-- <Marker :options="{ position: center }" /> -->
    </GoogleMap>
   
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { GoogleMap, Marker } from 'vue3-google-map'
const API_KEY = import.meta.env.VITE_API_KEY

const center = ref<google.maps.LatLngLiteral>({ lat: -1.286389, lng: 36.8219 });
</script >
<style scoped lang="scss">
#MapView {
    #map {
        width: 100%;
        height: 45vh;
        top: 0;
        left: 0;
    }
}
</style>