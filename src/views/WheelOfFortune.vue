<template>
  <div :class="wrapperClass" class="my-4 text-center">

<!--

First, we need a wheel. We can use the roulette library for this.
use the data stored in wheelItems as the source for the wheel; some tweaking might be necessary, I'm not sure of what the library requires unfortunately.

-->

    <Roulette ref="wheel" :items="wheelItems" @click="launchWheel" size=600 easing="bounce" horizontal-content  display-border display-indicator base-display base-background="#102535" indicator-position="top" base-display-indicator @wheel-start="onWheelStart" @wheel-end="onWheelEnd">
    </Roulette>

    <!--
When the wheel finishes spinning, we need to call a function that opens up a modal with the result, bringing the long description of the item that was selected and prompting people to talk for 60 seconds about that topic.

To that end, we also need a live timer inside the modal. When the timer reaches 0, show an animation (use the confetti emoji from SSB maybe?) and close the modal ready for another spin.

This basic interaction loop is the core of the activity.

I've provided some skeleton code to help get you started in case it helps - if it doesn't, feel free to delete it all and start from scratch.

-->

    <div v-if="showModal" class="fixed top-0 left-0 z-20 flex justify-center items-center w-full h-full backdrop-blur-sm overflow-hidden">
      <div class="flex max-h-[90%] md:max-h-[300px] w-11/12 max-w-2xl flex-col rounded-lg bg-white px-2 py-4 shadow-md drop-shadow-md">
        <div class="flex justify-between pl-6 mb-2">
          <div class="text-2xl font-bold my-auto">Modal Title</div>
          <div class="flex justify-center items-center w-8 h-8 -mt-1 rounded-full bg-primary-tint text-gray-400 transition-all duration-100 hover:bg-indigo-200 hover:text-gray-700 hover:rotate-90 cursor-pointer" @click="closeModal">
            <i class="far fa-times text-lg" />
          </div>
        </div>
        <div class="overflow-y-scroll px-6 w-full">
          <div class="leading-5 mb-2">Modal Text</div>
        <!--          provide the text from the data item (the full piece) and also show a timer here -->




        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Roulette } from 'vue3-roulette'
// library: https://roulette.nitocode.com/docs

// VARIABLES
const wrapperClass = 'max-w-[1100px] mx-auto'
const wheel = ref(null)
let showModal = ref(false)

// const items = [
//   { id: 1, name: "Banana", htmlContent: "Banana", textColor: "", background: "" },
//   { id: 2, name: "Apple", htmlContent: "Apple", textColor: "", background: "" },
//   { id: 3, name: "Orange and Purple", htmlContent: "Orange<br>and Purple", textColor: "", background: "" },
//   { id: 4, name: "Cherry", htmlContent: "Cherry", textColor: "", background: "" },
// ];

//included the documentation items here - the wheelItems below would work as-is but you can add extra data here, and use textColor or background to adjust individual colours if you like


const wheelItems = ref([
  {
    'id': 1,
    'htmlContent': 'Next TV Show',
    'desc': 'What TV show should your listener(s) watch next?'
  },
  {
    'id': 2,
    'htmlContent': 'Best pet',
    'desc': 'Which animal makes the best pet?'
  },
  {
    'id': 3,
    'htmlContent': 'Ideal time period',
    'desc': 'What time period would be the most exciting to live in?'
  },
  {
    'id': 4,
    'htmlContent': 'Ideal holiday',
    'desc': 'Describe the ideal all-expenses-paid holiday.'
  },
  {
    'id': 5,
    'htmlContent': 'Best season',
    'desc': 'Which season would you choose to have year-round?'
  },
  {
    'id': 6,
    'htmlContent': 'Study skills',
    'desc': 'What is the single most important skill needed to succeed at university?'
  },
  {
    'id': 7,
    'htmlContent': 'Your degree',
    'desc': 'Why is it important to study your degree?'
  },
  {
    'id': 8,
    'htmlContent': 'Do aliens exist?',
    'desc': 'Do aliens exist? Persuade your listener(s) of your stance.'
  },
  {
    'id': 9,
    'htmlContent': 'Social media',
    'desc': 'Is social media beneficial or harmful, on balance?'
  },
  {
    'id': 10,
    'htmlContent': 'Morning or night',
    'desc': 'Is it better to be a morning person or a night owl?'
  }
])

// FUNCTIONS
function launchWheel (){
  wheel.value.launchWheel();
}

function onWheelStart(){
  console.log(wheel)
}

function onWheelEnd(){
  //do something
  console.log(wheel.value.itemSelected) //this is the item that was selected; I suggest you do something with this data (like opening the modal with the info and starting the timer)
  openModal()
}

function openModal(){
  //do something like set showModal to true
  showModal.value = true
}

function closeModal(){
  //do something like set showModal to false
  showModal.value = false
}

function startTimer(){
  //do something
}

function closeAndResetModal(){
  //do something
}
</script>



<!--Unsure how much of it is possible to bring through, but I have loved this styling from Hui lately: https://mediaproduction.adelaide.edu.au/pace-interactives/#/feedback-techniques -->

<style>
.wheel-container-indicator::before {
  left: 50%;
}

.wheel-base-container .wheel-base-indicator::before {
  left: 50%;
}

.wheel .content.horizontal-content {
  height: 280% !important; /* used to center the text, adjust if needed */
}

/*styles for the wheel elements*/

.wheel-item {
/*  you can style the wheel slices here - if you add in a background colour, the one in the data above will take precedence*/


}



</style>
