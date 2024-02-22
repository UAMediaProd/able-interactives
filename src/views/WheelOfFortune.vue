<template>
  <div :class="wrapperClass" class="my-4">

<!--

First, we need a wheel. We can use the roulette library for this.
use the data stored in wheelItems as the source for the wheel; some tweaking might be necessary, I'm not sure of what the library requires unfortunately.

When the wheel finishes spinning, we need to call a function that opens up a modal with the result, bringing the long description of the item that was selected and prompting people to talk for 60 seconds about that topic.

To that end, we also need a live timer inside the modal. When the timer reaches 0, show an animation (use the confetti emoji from SSB maybe?) and close the modal ready for another spin.

This basic interaction loop is the core of the activity.

I've provided some skeleton code to help get you started in case it helps - if it doesn't, feel free to delete it all and start from scratch.

-->


  </div>
</template>

<script setup>
import { ref } from 'vue'
//possible library: https://roulette.nitocode.com/docs

// VARIABLES
const wrapperClass = 'max-w-[1100px] mx-auto'
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

// FUNCTIONS
function onWheelEnd(){
  //do something
}

function openModal(){
  //do something
}

function startTimer(){
  //do something
}

function closeAndResetModal(){
  //do something
}
</script>

<style>

</style>
