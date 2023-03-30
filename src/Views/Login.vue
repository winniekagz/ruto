
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import { onMounted } from "vue";
import TextField from '../components/FormInputs/TexField.vue';



interface user {

    email: string,
    password: string,

}
interface state {
    activeSee: boolean
}

const formData = reactive<user>({

    email: "",
    password: "",

});


// const rules = computed(() => {
//     return {

//         // email: { required: helpers.withMessage("Email is required", required), email },
//         // password: { required: helpers.withMessage(" Password is required", required), minLength: minLength(8) },

//     }
// });

// const v$ = useVuelidate(rules, formData)

const handleSubmit = async () => {
    // const response = await v$.value.$validate();
    console.log("formData", formData)



}

</script>

<template>
    <div class="grid grid-cols-3 place-items-center bg-login bg-cover">
        <div class="col-span-1 bg-d-green text-light h-screen w-full rounded-r-large p-24 flex flex-center items-center">
            <div>
                <h1 class="text-lime-50 capitalize text-title m-4 font-normal">
                    Affordable Housing Project monitoring tool
                </h1>

                <div class="rounded-md bg-light  lg:w-[100%]  h-[100%] m-4 flex flex-col justify-center  mt-20 p-4">
                    <h1 class="text-title capitalize font-normal text-black text-center my-3">Sign up</h1>

                    <div class="mb-2">
                        <TextField uniqueid="email" label="email" v-model="formData.email"/>
                        <TextField uniqueid="password" label="Password" v-model="formData.password"/>
                        
                        <button class="w-full capitalize bg-d-green text-light rounded-large h-[46px]">Submit</button>
                    </div>
                    <div class="flex justify-between">
                        <v-checkbox label="Remember me " value="primary" class="text-black border-black"></v-checkbox> 
                       <div>
          <h6 class="text-blue-500 capitalize">Forgot Password</h6>
        </div>
                    </div>
                </div>
            </div>



        </div>

        terr
    </div>
</template>
<style scoped>
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}
</style>