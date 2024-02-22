<template>
  <div :class="wrapperClass" class="my-4">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const wrapperClass = 'max-w-[1100px] mx-auto'

//possible library: https://roulette.nitocode.com/docs


const wheelItems = ref([
  {
    'shortCode': 'Next TV Show',
    'desc': 'What TV show should your listener(s) watch next?'
  },
  {
    'shortCode': 'Best pet',
    'desc': 'Which animal makes the best pet?'
  },
  {
    'shortCode': 'Ideal time period',
    'desc': 'What time period would be the most exciting to live in?'
  },
  {
    'shortCode': 'Ideal holiday',
    'desc': 'Describe the ideal all-expenses-paid holiday.'
  },
  {
    'shortCode': 'Best season',
    'desc': 'Which season would you choose to have year-round?'
  },
  {
    'shortCode': 'Study skills',
    'desc': 'What is the single most important skill needed to succeed at university?'
  },
  {
    'shortCode': 'Your degree',
    'desc': 'Why is it important to study your degree?'
  },
  {
    'shortCode': 'Do aliens exist?',
    'desc': 'Do aliens exist? Persuade your listener(s) of your stance.'
  },
  {
    'shortCode': 'Social media',
    'desc': 'Is social media beneficial or harmful, on balance?'
  },
  {
    'shortCode': 'Morning or night',
    'desc': 'Is it better to be a morning person or a night owl?'
  }
])
</script>

<style>

</style>
