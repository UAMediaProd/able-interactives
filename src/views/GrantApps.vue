<template>
  <div :class="wrapperClass" class="mt-4">
   <span @click="show = !show" :class="chosen ? chosen : 'bg-slate-100'" class="transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">To evaluate the success of the single-school pilot study, key stakeholders will be surveyed at baseline, halfway through the program (Week 5), during the final session (Week 10) and at follow-up after the school holidays. Evaluation methods have been summarised in Table 1.</span>

    <div v-if="show">
      <div class="flex gap-4 m-4 justify-center mx-auto border w-fit px-4 py-2 bg-slate-50 rounded">
        <p @click="chosen = 'bg-yellow-200'" class="hover:cursor-pointer bg-yellow-200 w-[30px] h-[30px] rounded-full text-center">iv</p>
        <p @click="chosen = 'bg-amber-400'" class="hover:cursor-pointer bg-amber-400 w-[30px] h-[30px] rounded-full text-center">i</p>
        <p @click="chosen = 'bg-pink-300'" class="hover:cursor-pointer bg-pink-300 w-[30px] h-[30px] rounded-full text-center">l</p>
        <p @click="chosen = 'bg-emerald-200'" class="hover:cursor-pointer bg-emerald-200 w-[30px] h-[30px] rounded-full text-center">iii</p>
        <p @click="chosen = 'bg-sky-200'" class="hover:cursor-pointer bg-sky-200 w-[30px] h-[30px] rounded-full text-center">ix</p>
        <p @click="chosen = null" class="hover:cursor-pointer bg-slate-200 w-[30px] h-[30px] rounded-full text-center"></p>
      </div>
    </div>





  </div>
</template>

<script setup>
import { ref } from 'vue'

const wrapperClass = 'max-w-[1100px] mx-auto'

let show = ref(false)
let chosen = ref(null)


</script>

<style>

</style>