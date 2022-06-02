<template>
  <!--  progress step bar -->
  <div class="grid grid-cols-5 mx-auto mt-2 mb-4 w-[90%] min-w-[550px] max-w-[800px]">
    <div v-for="(step, index) in ['Identify', 'Managerial Control', 'Possibility of Failure', 'Questions', 'Summary']" class="text-center">
      <div class="flex flex-col">
        <div class="flex justify-between w-full">
          <div class="h-[2px] my-auto w-full mr-2" :class="index ? (index <= state ? 'bg-green-500' : 'bg-gray-200') : 'bg-white'"></div>
          <i :class="stepClass(index)" class="w-fit"></i>
          <div class="h-[2px] my-auto w-full ml-2" :class="index<4 ? (index < state ? 'bg-green-500' : 'bg-gray-200') : 'bg-white'"></div>
        </div>
        <label class="text-xs">{{ step }}</label>
      </div>
    </div>
  </div>

  <!--  Page 1-->
  <div v-if="state===0" class="p-2">
    <h3 class="text-center my-2">Identify risks and uncertainties faced by Australian SMEs. (2-5 each)</h3>
    <div class="flex justify-center">
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center my-2"><i class="fas fa-exclamation-triangle mr-1 text-froly"></i>Risks</h3>
        <div class="text-center rounded bg-froly-lightest pt-1 pb-3 px-2">
          <div v-for="(thing, index) in risks" class="flex justify-between my-2">
            <i class="fas fa-triangle text-2xs my-auto mr-1 w-[20px]"></i>
            <input class="input-underline-primary bg-froly-lightest" v-model="risks[index].text" :maxlength="35">
            <div class="w-[25px]">
              <i v-if="risks.length>2" class="fas fa-minus-circle cursor-pointer text-secondary ml-2 my-auto hover:text-secondary-dark" @click="deleteRisk(index)" title="Remove"></i>
            </div>
          </div>
        </div>
        <div class="text-center">
          <i v-if="risks.length<5" class="fas fa-plus-circle text-froly cursor-pointer" @click="addRisk"></i>
        </div>
      </div>
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center my-2"><i class="fas fa-question-circle mr-1 text-sunshade"></i>Uncertainties</h3>
        <div class="text-center rounded bg-sunshade-lightest pt-1 pb-3 px-2">
          <div v-for="(thing, index) in uncertainties" class="flex justify-between my-2">
            <i class="fas fa-circle text-2xs my-auto mr-1 w-[20px]"></i>
            <input class="input-underline-primary bg-sunshade-lightest" v-model="uncertainties[index].text" :maxlength="35">
            <div class="w-[25px]">
              <i v-if="uncertainties.length>2" class="fas fa-minus-circle cursor-pointer text-secondary ml-2 my-auto hover:text-secondary-dark" @click="deleteUncertainties(index)" title="Remove"></i>
            </div>
          </div>
        </div>
        <div class="text-center">
          <i v-if="uncertainties.length<5" class="fas fa-plus-circle text-sunshade cursor-pointer" @click="addUncertainties"></i>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button class="btn-primary uppercase" @click="resetOptions" :disabled="isUnfinished">Next</button>
    </div>
  </div>

  <!--  Page 2-->
  <div v-if="state===1" class="p-2">
    <h3 class="text-center my-2">Arrange the risks and uncertainties you identified in the order of the “managerial control” (Low to High). </h3>

    <div class="flex justify-center">
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center mt-5 mb-4">
          <i :class="iconClass('risk')" class="mr-1"></i>
          Risks & Uncertainties
          <i :class="iconClass('uncertainty')" class="ml-1"></i>
        </h3>
        <draggable
            class="rounded border-2 border-dashed border-primary-darker min-h-[220px] p-1"
            :list="optionsListQ1"
            :component-data="{ type: 'transition-group', name: !drag ? 'flip-list' : null }"
            group="Q1"
            itemKey="id"
            @start="drag = true"
            @end="drag = false"
            v-bind="dragOptions">
          <template #item="{ element, index }">
            <div :class="bgClass(element.type)" class="rounded m-1 p-2 cursor-move" >
              <i :class="iconClass(element.type)" class="text-sm mr-2"></i>
              <span>{{ element.text }}</span>
            </div>
          </template>
        </draggable>
      </div>
      <i class="far fa-arrow-alt-right my-auto text-xl"></i>
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="flex flex-col text-center my-2">
          <i class="fas fa-long-arrow-up mx-auto mb-1"></i>
          High
        </h3>
        <draggable
          class="rounded border-2 border-dashed border-primary-darker min-h-[220px] p-1"
          :list="resultsListQ1"
          :component-data="{ type: 'transition-group', name: !drag ? 'flip-list' : null }"
          group="Q1"
          itemKey="id"
          @start="drag = true"
          @end="drag = false"
          v-bind="dragOptions">
          <template #item="{ element, index }">
            <div :class="bgClass(element.type)" class="rounded m-1 p-2 cursor-move" >
              <i :class="iconClass(element.type)" class="text-sm mr-2"></i>
              <span>{{ element.text }}</span>
            </div>
          </template>
          <template #footer>
            <div v-if="!resultsListQ1.length" class="text-center text-gray-400 h-full mt-[90px]">Drag and arrange items here</div>
          </template>
        </draggable>
        <h3 class="flex flex-col text-center my-2">
          Low
          <i class="fas fa-long-arrow-down mx-auto mt-1"></i>
        </h3>
      </div>
    </div>
    <div class="flex justify-between">
      <VDropdown placement="right">
        <button class="btn-primary uppercase">
          Back
        </button>
        <template #popper="{ hide }">
          <div class="flex justify-start py-2 max-w-[350px]">
            <i class="fas fa-exclamation-circle text-secondary text-xs my-auto m-2"></i>
            <span class="text-xs my-auto">Are you sure you want to go back to edit your inputs? You will lose your current progress.</span>
            <button class="btn-pill-outline-danger text-xs mx-2" @click="hide(); prevButton()">Confirm</button>
          </div>
        </template>
      </VDropdown>

      <button class="btn-primary uppercase" @click="nextButton" :disabled="optionsListQ1.length!==0">
        Next
      </button>

    </div>
  </div>

  <!--  Page 3-->
  <div v-if="state===2" class="p-2">
    <h3 class="text-center my-2">Now arrange the risks and uncertainties in the order of the “possibility of failure” (Low to High). </h3>

    <div class="flex justify-center">
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center mt-5 mb-4">
          <i :class="iconClass('risk')" class="mr-1"></i>
          Risks & Uncertainties
          <i :class="iconClass('uncertainty')" class="ml-1"></i>
        </h3>
        <draggable
          class="rounded border-2 border-dashed border-primary-darker min-h-[220px] p-1"
          :list="optionsListQ2"
          :component-data="{ type: 'transition-group', name: !drag ? 'flip-list' : null }"
          group="Q2"
          itemKey="id"
          @start="drag = true"
          @end="drag = false"
          v-bind="dragOptions"
        >
          <template #item="{ element, index }">
            <div :class="bgClass(element.type)" class="rounded m-1 p-2 cursor-move" >
              <i :class="iconClass(element.type)" class="text-sm mr-2"></i>
              <span>{{ element.text }}</span>
            </div>
          </template>
        </draggable>
      </div>
      <i class="far fa-arrow-alt-right my-auto text-xl"></i>
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="flex flex-col text-center my-2">
          <i class="fas fa-long-arrow-up mx-auto mb-1"></i>
          High
        </h3>
        <draggable
          class="rounded border-2 border-dashed border-primary-darker min-h-[220px] p-1"
          :list="resultsListQ2"
          :component-data="{ type: 'transition-group', name: !drag ? 'flip-list' : null }"
          group="Q2"
          itemKey="id"
          @start="drag = true"
          @end="drag = false"
          v-bind="dragOptions"
        >
          <template #item="{ element, index }">
            <div :class="bgClass(element.type)" class="rounded m-1 p-2 cursor-move" >
              <i :class="iconClass(element.type)" class="text-sm mr-2"></i>
              <span>{{ element.text }}</span>
            </div>
          </template>
          <template #footer>
            <div v-if="!resultsListQ2.length" class="text-center text-gray-400 h-full mt-[90px]">Drag and arrange items here</div>
          </template>
        </draggable>
        <h3 class="flex flex-col text-center my-2">
          Low
          <i class="fas fa-long-arrow-down mx-auto mt-1"></i>
        </h3>
      </div>
    </div>
    <div class="flex justify-between">

      <button class="btn-primary uppercase" @click="prevButton">
        Back
      </button>
      <button class="btn-primary uppercase" @click="nextButton" :disabled="optionsListQ2.length!==0">
        Next
      </button>

    </div>
  </div>

  <!--  page 4 -->
  <div v-if="state===3" class="p-2">
    <h3 class="text-center my-2">Which ones are most controllable?</h3>
    <div class="flex justify-center mb-4">
      <label for="toggleQ3" class="flex items-center cursor-pointer">
        <div class="mr-3">Risks</div>

        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input type="checkbox" id="toggleQ3" class="sr-only" v-model="toggleQ3">
          <!-- line -->
          <div class="block bg-froly w-14 h-8 rounded-full"></div>
          <!-- dot -->
          <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <!-- label -->
        <div class="ml-3">Uncertainties</div>
      </label>
    </div>


    <h3 class="text-center my-2">Which ones has the highest possibility of failure?</h3>

    <div class="flex justify-center mb-4">
      <label for="toggleQ4" class="flex items-center cursor-pointer">

        <div class="mr-3">Risks</div>

        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input type="checkbox" id="toggleQ4" class="sr-only" v-model="toggleQ4">
          <!-- line -->
          <div class="block bg-froly w-14 h-8 rounded-full"></div>
          <!-- dot -->
          <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <!-- label -->
        <div class="ml-3">Uncertainties</div>
      </label>
    </div>


    <h3 class="text-center my-2">Based on the above activity, state two characteristics of risks and two characteristics of uncertainty.</h3>

    <div class="flex justify-center">
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center my-2"><i class="fas fa-exclamation-triangle mr-1 text-froly"></i>Risks</h3>
        <div class="text-center rounded border-2 border-dashed border-froly pt-1 pb-3 px-2">
          <div v-for="(thing, index) in charRisks" class="flex justify-start my-2">
            <i class="fas fa-triangle text-2xs my-auto mr-1 w-[20px]"></i>
            <input class="input-underline-primary" v-model="charRisks[index].text" :maxlength="35">
          </div>
        </div>
      </div>
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center my-2"><i class="fas fa-question-circle mr-1 text-sunshade"></i>Uncertainties</h3>
        <div class="text-center rounded  border-2 border-dashed border-sunshade pt-1 pb-3 px-2">
          <div v-for="(thing, index) in charUncertainties" class="flex justify-start my-2">
            <i class="fas fa-circle text-2xs my-auto mr-1 w-[20px]"></i>
            <input class="input-underline-primary" v-model="charUncertainties[index].text" :maxlength="35">
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <button class="btn-primary uppercase" @click="prevButton">Back</button>
      <button class="btn-primary uppercase" @click="nextButton" :disabled="isUnfinished">Next</button>

    </div>
  </div>

  <!--  page 5 -->
  <div v-if="state===4" class="p-3">
    <div class="flex justify-between mx-3">
      <h3 class="my-2 mr-2">Congratulations! You have completed this activity! You can review your progress below and save this page as PDF by clicking the Print button.</h3>
      <button class="btn-primary uppercase ml-2" @click="printPage">Print</button>
    </div>

    <hr class="my-3">

    <div class="flex justify-center">
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center my-2">Identified Risks</h3>
        <div class="text-center rounded bg-froly-lightest py-1 px-2">
          <div v-for="(risk) in risks" class="flex justify-start my-2">
            <i class="fas fa-triangle text-2xs my-auto mr-1 w-[20px]"></i>
            <span>{{ risk.text }}</span>
          </div>
        </div>
      </div>
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center my-2">Identified Uncertainties</h3>
        <div class="text-center rounded bg-sunshade-lightest py-1 px-2">
          <div v-for="(uncertainty) in uncertainties" class="flex justify-start my-2">
            <i class="fas fa-circle text-2xs my-auto mr-1 w-[20px]"></i>
            <span>{{ uncertainty.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <h3 class="text-center">Characteristics</h3>
    <div class="flex justify-center">
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <div class="text-center rounded  border-2 border-dashed border-froly py-1 px-2">
          <div v-for="(risk) in risks" class="flex justify-start my-2">
            <i class="fas fa-triangle text-2xs my-auto mr-1 w-[20px]"></i>
            <span>{{ risk.text }}</span>
          </div>
        </div>
      </div>
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <div class="text-center rounded  border-2 border-dashed border-sunshade py-1 px-2">
          <div v-for="(uncertainty) in uncertainties" class="flex justify-start my-2">
            <i class="fas fa-circle text-2xs my-auto mr-1 w-[20px]"></i>
            <span>{{ uncertainty.text }}</span>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-3">

    <div class="flex justify-center">
      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center">Managerial Control</h3>
        <div class="flex flex-col justify-center">
          <i class="fas fa-caret-up mx-auto mt-1"></i>
          <span class="text-center text-sm">High</span>
        </div>
        <div class="rounded border-2 border-dashed border-primary-darker p-1">
          <div v-for="item in resultsListQ1" :class="bgClass(item.type)" class="rounded m-1 p-2">
            <i :class="iconClass(item.type)" class="text-sm mr-2"></i>
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <span class="text-center text-sm">Low</span>
          <i class="fas fa-caret-down mx-auto"></i>
        </div>
        <div class="flex justify-center">
          <label class="mr-2">Most controllable:</label>
          <h3 class="my-auto">{{ toggleQ3 ? 'Uncertainties' : 'Risks' }}</h3>
        </div>
      </div>

      <div class="m-3 w-2/5 min-w-[250px] max-w-[400px]">
        <h3 class="text-center">Possibility of Failure</h3>
        <div class="flex flex-col justify-center">
          <i class="fas fa-caret-up mx-auto mt-1"></i>
          <span class="text-center text-sm">High</span>
        </div>
        <div class="rounded border-2 border-dashed border-primary-darker p-1">
          <div v-for="item in resultsListQ2" :class="bgClass(item.type)" class="rounded m-1 p-2">
            <i :class="iconClass(item.type)" class="text-sm mr-2"></i>
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <span class="text-center text-sm">Low</span>
          <i class="fas fa-caret-down mx-auto"></i>
        </div>
        <div class="flex justify-center">
          <label class="mr-2">Highest possibility of failure:</label>
          <h3 class="my-auto">{{ toggleQ4 ? 'Uncertainties' : 'Risks' }}</h3>
        </div>
      </div>
    </div>

    <hr class="my-3">

    <div class="flex justify-start">
      <button class="btn-primary uppercase" @click="prevButton">Back</button>
    </div>
  </div>

</template>

<script setup>
import { computed, ref } from "vue"
import draggable from 'vuedraggable'


const state = ref(0)
const numElements = ref(5)
const risks = ref([
  { text: "", id: 1, type: "risk" },
  { text: "", id: 2, type: "risk" }
])
const uncertainties = ref([
  { text: "", id: 3, type: "uncertainty" },
  { text: "", id: 4, type: "uncertainty" }
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

const drag = ref(false)
const dragOptions = ref({
  animation: 200,
  disabled: false,
  ghostClass: "ghost"
})

const isUnfinished = computed(() => {
  let result = false
  let currentRisks = state.value === 0 ? risks.value : charRisks.value
  currentRisks.forEach(risk => {
    if (!risk.text) {
      result = true
    }
  })
  let currentUncertainties = state.value === 0 ? uncertainties.value : charUncertainties.value
  currentUncertainties.forEach(uncertainty => {
    if (!uncertainty.text) {
      result = true
    }
  })
  return result
})

//Functions
function addRisk () {
  if (risks.value.length < 5) {
    risks.value.push({ text: "", id: numElements.value, type: "risk" })
    numElements.value++
  }
}

function addUncertainties () {
  if (uncertainties.value.length < 5) {
    uncertainties.value.push({ text: "", id: numElements.value, type: "uncertainty" })
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

function stepClass(step) {
  if (step < state.value) {
    return "fas fa-check-circle text-green-500 text-xl"
  } else if (step === state.value) {
    return "far fa-dot-circle text-green-500 text-xl"
  } else {
    return "far fa-circle text-gray-500 text-xl"
  }
}

function iconClass(type) {
  switch (type) {
    case "risk":
      return "fas fa-exclamation-triangle text-froly my-auto"
    case "uncertainty":
      return "fas fa-question-circle text-sunshade my-auto"
  }
}

function bgClass(type) {
  switch (type) {
    case "risk":
      return "bg-froly-lightest"
    case "uncertainty":
      return "bg-sunshade-lightest"
  }
}

function printPage() {
  window.print()
}

</script>

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
}

input:checked ~ .block {
  background-color: #f89621;
}


.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
}

@media print {
  body {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
}
</style>