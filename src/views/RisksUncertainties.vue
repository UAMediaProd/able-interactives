<template>

  <!--  Page 1-->
  <div v-if="state===0">
    <h1>Identify risks and uncertainties faced by Australian SMEs.</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <h3 class="text-center">Risks</h3>
        <div class="text-center">
          <div v-for="(thing, index) in risks">
            <input class="border" v-model="risks[index].text" :maxlength="35">
            <i v-if="risks.length>2" class="fas fa-minus-circle cursor-pointer" @click="deleteRisk(index)"></i>
          </div>
        </div>
        <div class="text-center">
          <button class="adx-button primary" @click="addRisk" :disabled="risks.length===5">
            Add Risk
          </button>
        </div>
      </div>
      <div class="col-span-1">
        <h3 class="text-center">Uncertainties</h3>
        <div class="text-center">
          <div v-for="(thing, index) in uncertainties">
            <input class="border" v-model="uncertainties[index].text" :maxlength="35">
            <i v-if="uncertainties.length>2" class="fas fa-minus-circle cursor-pointer"
               @click="deleteUncertainties(index)"></i>
          </div>
        </div>
        <div class="text-center">

          <button class="adx-button primary" @click="addUncertainties" :disabled="uncertainties.length===5">
            Add Uncertainty
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button class="adx-button primary" @click="resetOptions" :disabled="isUnfinished">
        Next
      </button>
    </div>
  </div>

  <!--  Page 2-->
  <div v-if="state===1">
    <h1>Arrange the risks and uncertainties you identified in the order of the “managerial control” (Low to High). </h1>

    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <draggable
            class="list-group border bg-gray-400 min-h-[100px]"
            :list="resultsListQ1"
            group="Q1"
            itemKey="id"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">{{ element.text }}</div>
          </template>
        </draggable>
      </div>
      <div class="col-span-1">
        <draggable
            class="list-group border bg-gray-400 min-h-[100px]"
            :list="optionsListQ1"
            group="Q1"
            itemKey="id"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">{{ element.text }}</div>
          </template>
        </draggable>
      </div>
    </div>
    <div class="flex justify-between">
      <VDropdown placement="right">
        <!-- This will be the popover reference (for the events and position) -->
        <button class="adx-button primary">
          Previous
        </button>

        <!-- This will be the content of the popover -->
        <template #popper="{ hide }">
          <div class="flex justify-start">
            <span>Are you sure you want to go back? You will lose your current placement</span>
            <button class="adx-button primary" @click="hide(); prevButton()">Confirm</button>
          </div>

        </template>
      </VDropdown>


      <button class="adx-button primary" @click="nextButton" :disabled="optionsListQ1.length!==0">
        Next
      </button>

    </div>
  </div>

  <!--  Page 3-->
  <div v-if="state===2">
    <h1>Now arrange the risks and uncertainties in the order of the “possibility of failure” (Low to High). </h1>

    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <draggable
            class="list-group border bg-gray-400 min-h-[100px]"
            :list="resultsListQ2"
            group="Q2"
            itemKey="id"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">{{ element.text }}</div>
          </template>
        </draggable>
      </div>
      <div class="col-span-1">
        <draggable
            class="list-group border bg-gray-400 min-h-[100px]"
            :list="optionsListQ2"
            group="Q2"
            itemKey="id"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">{{ element.text }}</div>
          </template>
        </draggable>
      </div>
    </div>
    <div class="flex justify-between">

      <button class="adx-button primary" @click="prevButton">
        Previous
      </button>
      <button class="adx-button primary" @click="nextButton" :disabled="optionsListQ2.length!==0">
        Next
      </button>

    </div>
  </div>

  <div v-if="state===3">
    <p class="text-center">Which ones are most controllable?</p>
    <div class="flex justify-center">
      <label for="toggleQ3" class="flex items-center cursor-pointer">

        <div class="ml-3 text-gray-700 font-medium">
          Risks
        </div>

        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input type="checkbox" id="toggleQ3" class="sr-only" v-model="toggleQ3">
          <!-- line -->
          <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <!-- dot -->
          <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <!-- label -->
        <div class="ml-3 text-gray-700 font-medium">
          Uncertainties
        </div>
      </label>
    </div>


    <p class="text-center">Which ones has the highest possibility of failure?</p>

    <div class="flex justify-center">
      <label for="toggleQ4" class="flex items-center cursor-pointer">

        <div class="ml-3 text-gray-700 font-medium">
          Risks
        </div>

        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input type="checkbox" id="toggleQ4" class="sr-only" v-model="toggleQ4">
          <!-- line -->
          <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <!-- dot -->
          <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <!-- label -->
        <div class="ml-3 text-gray-700 font-medium">
          Uncertainties
        </div>
      </label>
    </div>


    <p class="text-center">Based on the above activity, state two characteristics of risks and two characteristics of
      uncertainty</p>

    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <h3 class="text-center">Risks</h3>
        <div class="text-center">
          <div v-for="(thing, index) in charRisks">
            <input class="border" v-model="charRisks[index].text" :maxlength="35">

          </div>
        </div>
      </div>
      <div class="col-span-1">
        <h3 class="text-center">Uncertainties</h3>
        <div class="text-center">
          <div v-for="(thing, index) in charUncertainties">
            <input class="border" v-model="charUncertainties[index].text" :maxlength="35">

          </div>
        </div>

      </div>
    </div>


    <div class="flex justify-between">

      <button class="adx-button primary" @click="prevButton">
        Previous
      </button>
      <button class="adx-button primary" @click="nextButton">
        Next
      </button>

    </div>
  </div>

  <div v-if="state===4">
    <h1>Page 5</h1>
    <div class="flex justify-between">

      <button class="adx-button primary" @click="prevButton">
        Previous
      </button>


    </div>
  </div>

</template>

<script setup>
import {computed, ref} from "vue"
import draggable from 'vuedraggable'


const state = ref(0)
const numElements = ref(4)
const risks = ref([
  {text: "AAA", id: 0},
  {text: "BBB", id: 1}
])
const uncertainties = ref([
  {text: "CCC", id: 2},
  {text: "DDD", id: 3}
])

const charRisks = ref([
  {text: "", id: 0},
  {text: "", id: 1}
])
const charUncertainties = ref([
  {text: "", id: 2},
  {text: "", id: 3}
])

const optionsListQ1 = ref([])
const optionsListQ2 = ref([])
const resultsListQ1 = ref([])
const resultsListQ2 = ref([])

const toggleQ3 = ref(false)
const toggleQ4 = ref(false)

const isUnfinished = computed(() => {
  let result = false
  risks.value.forEach(risk => {
    if (!risk.text) {
      result = true
    }
  })
  uncertainties.value.forEach(uncertainty => {
    if (!uncertainty.text) {
      result = true
    }
  })
  return result
})

//Functions
function addRisk() {
  if (risks.value.length < 5) {
    risks.value.push({text: "", id: numElements.value})
    numElements.value++
  }
}

function addUncertainties() {
  if (uncertainties.value.length < 5) {
    uncertainties.value.push({text: "", id: numElements.value})
    numElements.value++
  }
}

function nextButton() {
  state.value++
}

function prevButton() {
  state.value--
}

function deleteRisk(index) {
  risks.value.splice(index, 1)
}

function deleteUncertainties(index) {
  uncertainties.value.splice(index, 1)
}

function resetOptions() {
  optionsListQ1.value = risks.value.concat(uncertainties.value)
  optionsListQ2.value = risks.value.concat(uncertainties.value)
  resultsListQ1.value = []
  resultsListQ2.value = []
  toggleQ3.value = false
  toggleQ4.value = false

  charRisks.value = [
    {text: "", id: 0},
    {text: "", id: 1}
  ]
  charUncertainties.value = [
    {text: "", id: 2},
    {text: "", id: 3}
  ]
  nextButton()
}

</script>

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

</style>