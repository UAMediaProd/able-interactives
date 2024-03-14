<template>
  <div :class="wrapperClass" class="my-4 text-center">

<!--

First, we need a wheel. We can use the roulette library for this.

Use the data stored in wheelItems as the source for the wheel; some tweaking might be necessary, I'm not sure of what the library requires unfortunately.

-->
    <p class="font-bold">The Wheel of Fortune</p>
    <p>Click the wheel to spin for a random topic!</p><br>
    <Roulette ref="wheel" :items="wheelItems" @click="launchWheel" result-variation="0" size=600 easing="ease" horizontal-content base-display base-background="#266578" indicator-position="top" base-size="45" @wheel-start="onWheelStart" @wheel-end="onWheelEnd" :duration="isReset ? 0.001 : spinDuration" >
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
          <div class="text-xl overflow-y-scroll px-4 w-full font-bold my-auto content-center">{{wheel.itemSelected.htmlContent}}</div>
        <div>
            <div :class="countDown >0 ? 'invisible': ''" class="flex justify-center items-center w-8 h-8 -mt-1 rounded-full bg-primary-tint text-gray-400 transition-all duration-100 hover:bg-indigo-200 hover:text-gray-700 hover:rotate-90 cursor-pointer" @click="closeModal">
                <i class="far fa-times text-lg" />
            </div>
          </div>
        </div>

        <div class="overflow-y-scroll px-6 w-full">
          <div class="leading-5 mb-2">
            <p>{{introText}}</p>
<br>

            <p><strong>"{{wheel.itemSelected.desc}}"</strong></p>
            <br>
            <p v-if="countDown >= 45 & countDown <=60" class="text-xl text-[#90be6d] font-bold">Current time left: {{countDown}} seconds</p>
            <p v-if="countDown >= 15 & countDown <=44" class="text-xl text-[#f8961e] font-bold">Current time left: {{countDown}} seconds</p>
            <p v-if="countDown >= 1 & countDown <=14" class="text-xl text-[#d40000] font-bold">Current time left: {{countDown}} seconds</p>
            <p v-else-if="countDown === 1" class="text-xl text-[#d40000] font-bold">Current time left: {{countDown}} second</p>


              <img v-else-if="countDown === 0" src="https://i.giphy.com/media/1wX5TJZPqVw3HhyDYn/giphy.webp" class="mx-auto w-20" alt="Celebration animated gif">

            <button @click="closeModal" class="inline-block float-left rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Reset wheel</button>
  </div>
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
const countDownTime = 60
const spinDuration = 2
let wheel = ref(null)
let showModal = ref(false)
let introText = ref("Try to talk about this topic for a minute. A timer is provided to help you practice.")
let countDown = ref(countDownTime)
const isReset = ref(false)
let countInt = null

// The wheelItems below would work as-is but you can add extra data here, and use textColor or background to adjust individual colours if you like

const wheelItems = ref([
  {
    'id': 1,
    'htmlContent': 'Next TV Show',
    'desc': 'What TV show should your listener(s) watch next?',
    'background': "#94dff6",
  },
  {
    'id': 2,
    'htmlContent': 'Best pet',
    'desc': 'Which animal makes the best pet?',
    'background': "#d3e5c5",
  },
  {
    'id': 3,
    'htmlContent': 'Ideal time period',
    'desc': 'What time period would be the most exciting to live in?',
    'background': "#94dff6",
  },
  {
    'id': 4,
    'htmlContent': 'Ideal holiday',
    'desc': 'Describe the ideal all-expenses-paid holiday.',
    'background': "#d3e5c5",
  },
  {
    'id': 5,
    'htmlContent': 'Best season',
    'desc': 'Which season would you choose to have year-round?',
    'background': "#94dff6",
  },
  {
    'id': 6,
    'htmlContent': 'Study skills',
    'desc': 'What is the single most important skill needed to succeed at university?',
    'background': "#d3e5c5",
  },
  {
    'id': 7,
    'htmlContent': 'Your degree',
    'desc': 'Why is it important to study your degree?',
    'background': "#94dff6",
  },
  {
    'id': 8,
    'htmlContent': 'Do aliens exist?',
    'desc': 'Do aliens exist? Persuade your listener(s) of your stance.',
    'background': "#d3e5c5",
  },
  {
    'id': 9,
    'htmlContent': 'Social media',
    'desc': 'Is social media beneficial or harmful, on balance?',
    'background': "#94dff6",
  },
  {
    'id': 10,
    'htmlContent': 'Morning or night',
    'desc': 'Is it better to be a morning person or a night owl?',
    'background': "#d3e5c5",
  }
])

// FUNCTIONS
function launchWheel (){
  wheel.value.launchWheel();
}

function onWheelStart(){
}

function onWheelEnd(){
  if (isReset.value) {
    isReset.value = false
    return
  }
  openModal()
}

function openModal(selectedItem){
  showModal.value = true
  clearInterval(countInt)
  startTimer();
}

function closeModal(){
  showModal.value = false
  isReset.value = true
  wheel.value.reset();
}

function startTimer(){
  countDown.value = countDownTime;

// Update the count down every 1 second
  countInt = setInterval(function() {
    //whatever is inside this section happens every second
    // console.log("tick:", countDown.value)
    countDown.value -= 1;
    if(countDown.value <= 0){
      clearInterval(countInt);
      endTimer();
    }
 }, 1000);

}

function endTimer(){
  //do something when the timer ends
  // console.log("End")

}

function closeAndResetModal(){
  //do something
}
</script>

<!--Unsure how much of it is possible to bring through, but I have loved this styling from Hui lately: https://mediaproduction.adelaide.edu.au/pace-interactives/#/feedback-techniques -->

<style>
.wheel-container-indicator::before {
  left: 50%;
  border-top: 20px solid #266578 !important;
}

.wheel-base-container {
  left: 50%;
  border-width:5px !important;
  border-color: white !important;
}

.wheel .content.horizontal-content {
  height: 280% !important; /* used to center the text, adjust if needed */
}

.wheel-item {
/*  you can style the wheel slices here - if you add in a background colour, the one in the data above will take precedence*/
  border-color: white !important;
  border-width: 3px !important;
}

</style>
