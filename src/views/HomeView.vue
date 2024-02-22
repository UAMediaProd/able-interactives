<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="bg-primary-darker m-0 min-h-[30px] p-4">
      <div :class="wrapperClass"><img class="my-2" src="@/assets/uoa-logo.png" width="160" alt="" /></div>
    </div>
    <div class="mb-auto">
      <div :class="wrapperClass">
        <h2>ABLE Interactives</h2>
        <p>Interactives for ABLE courses at The University of Adelaide</p>
        <ul class="list-disc list-outside">
          <li class="my-2">
            <RouterLink to="/risks-and-uncertainties" :class="linkClass">Risks and Uncertainties</RouterLink>
          </li>
          <li class="my-2">
            <RouterLink to="/elc" :class="linkClass">ELC Active Learning Tasks</RouterLink>
          </li>
          <li class="my-2">
            <RouterLink to="/glossary" :class="linkClass">Pedagogy Glossary</RouterLink>
          </li>
          <li class="my-2">
            <RouterLink to="/grantapps" :class="linkClass">Grant Applications Activity</RouterLink>
          </li>
          <li class="my-2">
            <RouterLink to="/wheel" :class="linkClass">Wheel of Fortune</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-primary-darker m-0 min-h-[150px] p-4 text-white">
      <div :class="wrapperClass">
        <div class="flex justify-between my-4">
          <p class="my-auto">&copy; The University of Adelaide</p>
          <img src="@/assets/uoa-logo.png" width="200" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const wrapperClass = 'max-w-[90%] mx-auto'
const linkClass = 'text-primary underline hover:text-primary-dark'

</script>

<style>
h2 {
  font-size: 2rem !important;
  line-height: 1.05;
  margin: 2rem 0 0.7rem !important;
  letter-spacing: 0.02rem;
}
</style>
